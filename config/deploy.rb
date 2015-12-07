set :stages, ['staging', 'production']
set :default_stage, "staging"
require 'capistrano/ext/multistage'
require 'bundler/capistrano'
require "whenever/capistrano"
require "rvm/capistrano"

set :branch, ENV['BRANCH'] || ENV['REVISION'] || ENV['WERCKER_GIT_COMMIT'] || 'master'

set :application, "muddleme"
set :scm, :git
set :repository, "git@bitbucket.org:kevinbrothers/muddlemenewfork3-27-2015.git"
set :deploy_to, "/var/www/muddleme"
#set :deploy_via, :remote_cache
set :deploy_env, 'production'
ssh_options[:forward_agent] = true

set :whenever_command, "bundle exec whenever"

namespace :delayed_job do
  def delayed_job_command
    fetch(:delayed_job_command, 'bin/delayed_job')
  end
end

after "deploy:stop",    "delayed_job:stop"
after "deploy:start",   "delayed_job:start"
after "deploy:restart", "delayed_job:restart"

namespace :db do
  desc "Create database YAML in shared path"
  task :default do
    section = { "adapter" => "mysql2", "database"=>app_db_database ,"host" => app_db_host, "username" => app_db_username, "password" => app_db_password, "encoding" => "utf8"}
    db_config = {}
    ["development", "test", "production"].each do |env|
      db_config[env] = section
    end

    run "mkdir -p #{shared_path}/config"
    put db_config.to_yaml, "#{shared_path}/config/database.yml"
  end

  task :symlink do
    run "ln -nfs #{shared_path}/config/database.yml #{release_path}/config/database.yml"
  end
end

after  'deploy:setup', "db:default"
#before 'deploy:assets:precompile', "db:symlink"
after "deploy:finalize_update", "db:symlink"

# Migrations
after "deploy", "deploy:migrate"

#after "deploy:update_code", "db:default"
#after "deploy:update_code", "db:symlink"

namespace :passenger do
  desc "Restart Passenger"  
  task :restart do  
    run "touch #{current_path}/tmp/restart.txt"  
  end
end
after :deploy, "passenger:restart"

namespace :deploy do
  namespace :assets do
    task :precompile, :roles => :web, :except => { :no_release => true } do
      from = source.next_revision(current_revision)
      if capture("cd #{latest_release} && #{source.local.log(from)} vendor/assets/ app/assets/ | wc -l").to_i > 0
        run %Q{cd #{latest_release} && #{rake} RAILS_ENV=#{rails_env} #{asset_env} assets:precompile}
      else
        logger.info "Skipping asset pre-compilation because there were no asset changes"
      end
    end
  end
end

# If you are using Passenger mod_rails uncomment this:
# namespace :deploy do
#   task :start do ; end
#   task :stop do ; end
#   task :restart, :roles => :app, :except => { :no_release => true } do
#     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
#   end
# end

# social.yml
namespace :social do
  desc "Create social YAML in shared path"

  task :default do
    config = {
        "production" => {
            'fb_app_id'          => fb_app_id,
            'fb_app_secret'      => fb_app_secret,
            'tw_consumer_key'    => tw_consumer_key,
            'tw_consumer_secret' => tw_consumer_secret,
            'g_consumer_key'     => g_consumer_key,
            'g_consumer_secret'  => g_consumer_secret,
            'paypal_login'       => paypal_login, 
            'paypal_password'    => paypal_password,
            'paypal_signature'   => paypal_signature, 
            'authorize_login'    => authorize_login,
            'authorize_password' => authorize_password,
            'merchant_production_mode'   => merchant_production_mode
        }
    }
    run "mkdir -p #{shared_path}/config"
    put config.to_yaml, "#{shared_path}/config/social.yml"
  end

  task :symlink do
    run "ln -nfs #{shared_path}/config/social.yml #{release_path}/config/social.yml"
  end
end
after  'deploy:setup', :social
#before 'deploy:assets:precompile', "social:symlink"
after "deploy:finalize_update", "social:symlink"

# hostname.yml
namespace :hostname do
  desc "Create hostname YAML in shared path"

  task :default do
    config = {
        "production" => {
            'hostname' => hostname_hostname,
            'full_hostname' => hostname_full_hostname
        }
    }
    run "mkdir -p #{shared_path}/config"
    put config.to_yaml, "#{shared_path}/config/hostname.yml"
  end

  task :symlink do
    run "ln -nfs #{shared_path}/config/hostname.yml #{release_path}/config/hostname.yml"
  end
end

namespace :deploy do
  desc "build missing paperclip styles"
  task :build_missing_paperclip_styles, :roles => :app do
    #run "cd #{release_path}; RAILS_ENV=production bundle exec rake paperclip:refresh:missing_styles"
  end
end

after("deploy:update_code", "deploy:build_missing_paperclip_styles")

after  'deploy:setup', :hostname
#before 'deploy:assets:precompile', "hostname:symlink"
after "deploy:finalize_update", "hostname:symlink"
class AddEmailContentsRecord < ActiveRecord::Migration
  def up
    EmailContent.create(:name => 'search_ended_from_soleo', :send_mail => 1)
  end

  def down
    content = EmailContent.find_by_name('search_ended_from_soleo')
    content.destroy if content
  end
end

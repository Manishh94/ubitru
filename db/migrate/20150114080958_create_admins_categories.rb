class CreateAdminsCategories < ActiveRecord::Migration
  def change
    create_table :admins_categories do |t|

      t.timestamps
    end
  end
end

class CreateAdminsStoreCategories < ActiveRecord::Migration
  def change
    create_table :admins_store_categories do |t|
      t.string :name
      t.integer :order
      t.datetime:created_at
      t.timestamps
    end
  end
end

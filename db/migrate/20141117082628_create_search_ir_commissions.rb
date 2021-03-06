class CreateSearchIrCommissions < ActiveRecord::Migration
  def change
    create_table :search_ir_commissions do |t|
      t.string :commission_id
      t.integer :ir_merchant_id
      t.integer :resulting_balance
      t.float :price
      t.float :commission_amount
      t.integer :search_intent_id_received
      t.datetime :occurred_at
      t.text :params
      t.timestamps
    end
  end
end

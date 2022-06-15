class CreateAlerts < ActiveRecord::Migration[6.1]
  def change
    create_table :alerts do |t|
      t.string :origin
      t.string :destination
      t.integer :time
      t.integer :user_id

      t.timestamps
    end
  end
end

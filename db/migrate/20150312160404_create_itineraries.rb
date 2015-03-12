class CreateItineraries < ActiveRecord::Migration
  def change
    create_table :itineraries do |t|
      t.text :days

      t.timestamps null: false
    end
  end
end

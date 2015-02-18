class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :total_rating, default: 0
      t.integer :num_votes, default: 0

      t.timestamps
    end
  end
end

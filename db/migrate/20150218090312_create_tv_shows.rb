class CreateTvShows < ActiveRecord::Migration
  def change
    create_table :tv_shows do |t|
      t.string :title
      t.integer :total_rating, default: 0
      t.integer :num_votes, default: 0

      t.timestamps
    end
  end
end

class TvShow < ActiveRecord::Base
  has_many :ratings, as: :ratable
  has_many :users, through: :ratings


  def update_average(rating)
    votes = self.num_votes
    total_rating = self.total_rating
    self.update(total_rating: total_rating + rating, num_votes: votes + 1)
  end

  def average
    self.total_rating / self.num_votes
  end
end
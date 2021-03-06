class TvShow < ActiveRecord::Base
  has_many :ratings, as: :ratable
  has_many :users, through: :ratings

  def average
    if self.num_votes > 0
      self.total_rating / self.num_votes
    else
      "Nobody voted for this yet <img src='/img/sad_icon.jpg'>"
    end
  end

  def update_average(rating)
    votes = self.num_votes
    total_rating = self.total_rating
    self.update(total_rating: total_rating + rating, num_votes: votes + 1)
  end

end
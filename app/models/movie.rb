class Movie < ActiveRecord::Base
  has_many :ratings, as: :ratable
  has_many :users, through: :ratings

  def average
    self.total_rating / self.num_votes
  end

  def bacon(hey)
    p "bacon#{hey}"
  end

  def update_average(rating)
    votes = self.num_votes
    total_rating = self.total_rating
    self.update(total_rating: total_rating + rating, num_votes: votes + 1)
  end

  # def update_mov_average(rating)
  #   # mov = Movie.find(movie_id)
  #   self.total_rating += rating
  #   self.num_votes += 1
  # end
end
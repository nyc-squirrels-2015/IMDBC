class User < ActiveRecord::Base
  has_secure_password
  has_many :ratings
  has_many :rated_movies, through: :ratings, source: :ratable, source_type: 'Movie'
  has_many :rated_tv_shows, through: :ratings, source: :ratable, source_type: 'TvShow'
end
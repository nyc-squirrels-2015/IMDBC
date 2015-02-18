class Rating < ActiveRecord::Base
  belongs_to :ratable, polymorphic: true
  belongs_to :user
  validates :user, uniqueness: { scope: :ratable_id,
    message: "User can only vote on this comment one time" }
  after_create :update_ratable_avg

    def update_ratable_avg
      if self.ratable_type == "Movie"
        mov = Movie.find(self.ratable_id)
        mov.update_average(self.rating)
      elsif self.ratable_type == "TvShow"
        tvshow = TvShow.find(self.ratable_id)
        tvshow.update_tv_show_avg(self.rating)
      end
    end
  end
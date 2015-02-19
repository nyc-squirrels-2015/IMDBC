get '/movies/:id/ratings/new' do |id|
  @movie = Movie.find(id)
  erb :"ratings/_rating_new", layout: false
end

post '/movies/:id/ratings' do |id|
  @movie = Movie.find(id)
  p params[:rating]
  @rating = Rating.create(user_id: current_user.id, ratable_id: @movie.id, ratable_type: "Movie", rating: params[:rating].to_i)
  @movie = Movie.find(id)
  {rating: @rating.rating, global_average: @movie.average}.to_json
end
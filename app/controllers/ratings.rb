get '/movies/:id/ratings/new' do |id|
  @movie = Movie.find(id)
  erb :"ratings/_rating_new", layout: false
end

post '/movies/:id/ratings' do |id|
  @movie = Movie.find(id)
  p params[:rating]
  @rating = Rating.create(user_id: current_user.id, ratable_id: @movie.id, ratable_type: "Movie", rating: params[:rating].to_i)
  {rating: @rating}.to_json
end
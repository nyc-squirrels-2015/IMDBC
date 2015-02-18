get '/movies' do
  @movies = Movie.all
  erb :"movies/_movies", layout: false
end

get '/movies/new' do
  erb :"movies/_movie_new", layout: false
end

get '/movies/:id' do |id|
  @movie = Movie.find(id)
  erb :"movies/_movie"
end

post '/movies' do
  @movie = Movie.create(title: params[:movie][:title])
  {movie: @movie}.to_json
end

delete '/movies/:id' do |id|
  @movie = Movie.destroy(id)
  {id: @movie.id}.to_json
end
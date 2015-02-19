get '/ratings/new' do
  erb :"ratings/_rating_new", layout: false
end

post '/ratings' do
  @rating = Rating.create(user_id: current_user.id, ratable_id: params[:movie][:id], ratable_type: "Movie", rating: params[:rating][:rating])
end
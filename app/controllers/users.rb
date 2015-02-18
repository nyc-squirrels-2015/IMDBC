get '/users/:id' do |id|
  require_login
  @user = User.find(id)
  erb :"users/_user"
end

delete '/users/:id' do |id|
  @user = User.destroy(id)
  session.clear
  redirect '/'
end

get '/users/:id/edit' do |id|
  @user = User.find(id)
  erb :"users/_user_edit", layout: false
end

put '/users/:id' do |id|
  @user = User.find(id)
  @user.update(params[:user])
  {user: @user}.to_json
end
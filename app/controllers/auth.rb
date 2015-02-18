get '/' do
  erb :_welcome
end

get '/auth/login' do
  erb :"auth/_login", layout: false
end

post '/auth/login' do
  p params[:user][:email]
  p params[:user][:password]
  @user = User.find_by(email: params[:user][:email]).try(:authenticate, params[:user][:password])
  p @user
  # .try(:authenticate(params[:user][:password]))
  set_session
  {path: "/users/#{current_user.id}"}.to_json
  # User.find_by(name: 'david').try(:authenticate, 'notright')
end

get '/users/new' do
  erb :"auth/_signup", layout: false
end

post '/users' do
  @user = User.create(params[:user])
  set_session
  {path: "/users/#{current_user.id}"}.to_json
  # if @user
  #   set_session
  # else
  #   redirect '/login'
  # end
end

get '/auth/logout' do
  session.clear
  redirect '/'
end
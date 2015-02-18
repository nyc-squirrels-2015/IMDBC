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
  if p @user
    set_session
    {path: "/users/#{current_user.id}"}.to_json
  else
    401
  end
end

get '/users/new' do
  erb :"auth/_signup", layout: false
end

post '/users' do
  @user = User.create(params[:user])
  set_session
  {path: "/users/#{current_user.id}"}.to_json
end

get '/auth/logout' do
  session.clear
  redirect '/'
end

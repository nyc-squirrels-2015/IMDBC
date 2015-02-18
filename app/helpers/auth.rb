def current_user
  if session[:user_id]
    @user = User.find(session[:user_id])
  else
    nil
  end
end

def is_authenticated?
  !!session[:user_id]
end

def require_login
  redirect '/auth/login' unless is_authenticated?
end

def set_session
  session[:user_id] = @user.id
  require_login
end
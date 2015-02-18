def navbar_login
  if current_user
    "<a id='logout-btn' href='/auth/logout'> Logout </a>"
  else
    "<a id='login-btn' href='/auth/login'> Login </a> <a id='signup-btn' href='/users/new'> Signup </a>"
  end
end
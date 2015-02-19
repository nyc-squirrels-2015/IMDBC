require_relative '../config/environment.rb'
require_relative '../app/controllers/users.rb'
require_relative '../app/controllers/auth.rb'
require_relative '../app/controllers/movies.rb'
require 'rspec'
require 'rack/test'

describe 'IMDBC' do
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  describe 'Routes' do

    it 'get /auth/login' do
      get '/auth/login'
      expect(last_response).to be_ok
      expect(last_response.body).to include 'Login'
    end

    it 'get /users/new' do
      get '/users/new'
      expect(last_response).to be_ok
      expect(last_response.body).to include 'Create'
    end

  end

end
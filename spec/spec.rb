require_relative '../config/environment.rb'
require_relative '../app/controllers/users.rb'  # <-- your sinatra app
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
      # expect(last_response.body).to eq('Hello World')
    end

  end

end
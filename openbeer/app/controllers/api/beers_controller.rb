module Api
  class BeersController < ActionController::Base
    def index
      @beers = Beer.all
      @breweries = Brewery.all
    end
  end
end

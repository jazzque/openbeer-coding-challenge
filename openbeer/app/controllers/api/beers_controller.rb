module Api
  class BeersController < ActionController::Base
    def index
      @beers = Beer.all.order(:name)
      @breweries = Brewery.all.order(:name)
    end
  end
end

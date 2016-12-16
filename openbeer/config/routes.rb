Rails.application.routes.draw do
  root to: 'openbeer#index'

  namespace :api do
    resources :beers, only: :index
  end
end

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }

  root "home#index"
end

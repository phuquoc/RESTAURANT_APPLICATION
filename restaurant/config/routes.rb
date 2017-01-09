Rails.application.routes.draw do
  post '/rate' => 'rater#create', :as => 'rate'
  devise_for :users
  resources :food_items
  get 'contact_us' => 'home#contact_us'
  get 'menu' => 'home#menu'
  root 'home#index'

end

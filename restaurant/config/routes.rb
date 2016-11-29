Rails.application.routes.draw do
  resources :food_items
  get 'contact_us' => 'home#contact_us'
  get 'menu' => 'home#menu'
  root 'home#index'

end

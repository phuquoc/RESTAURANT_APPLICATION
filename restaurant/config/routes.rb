Rails.application.routes.draw do
  get 'contact_us' => 'home#contact_us'
  get 'menu' => 'home#menu'
  root 'home#index'

end

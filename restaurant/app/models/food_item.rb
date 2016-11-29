class FoodItem < ApplicationRecord
  validates :name, :section, :price, presence: true

  def image_url
    if image.present?
      image
    else
      "http://loremflickr.com/320/240/#{CGI.escape name}"
    end
  end
end

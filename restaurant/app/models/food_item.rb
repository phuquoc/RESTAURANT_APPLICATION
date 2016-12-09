class FoodItem < ApplicationRecord
  validates :name, :section, :price, presence: true
  belongs_to :section
  def image_url
    if image.present?
      image
    else
      "http://loremflickr.com/320/240/#{CGI.escape name}"
    end
  end

  def self.search(keyword)
    FoodItem.where('name like ?',"%#{keyword}%")  
  end
end

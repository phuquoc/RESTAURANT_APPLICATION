class FoodItem < ApplicationRecord
  validates :name, :section, :price, presence: true
#  belongs_to :section

mount_uploader :image, AttachmentUploader # Tells rails to use this uploader for this model.


  def image_url
    if image.present?
      image
    else
      #"http://loremflickr.com/320/240/#{CGI.escape name}"
    # onchange="readURL(this)
    "#"
    end
  end

  def self.search(keyword)

    where('name like ?',"%#{keyword}%")
  end


  def self.name_order
    order(:name)
  end

  def self.price_order
    order(price: :desc)
  end
end

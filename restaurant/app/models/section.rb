class Section < ApplicationRecord
#  has_many :food_items
  def self.all
    %w(Food Electronic Book Clothes)

  end
end

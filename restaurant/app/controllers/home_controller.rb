class HomeController < ApplicationController
  def index
  end

  def contact_us

  end
  def menu
    if params[:section]
      @food_items = FoodItem.where section: params[:section]
    else
      if params[:q]
        keyword = params[:q]
        @food_items = FoodItem.search keyword
                sort_mode = params[:sort_mode]
                if sort_mode =="0"
                  @food_items = @food_items.name_order
                else
                  @food_items = @food_items.price_order
                end
      else
        @food_items = FoodItem.all
      end
    end
  end
end

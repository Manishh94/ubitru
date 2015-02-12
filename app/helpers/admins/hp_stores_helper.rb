module Admins::HpStoresHelper

  def stores_page_name(type)
    case type
      when "browseable"
        name = "Home Page Browseable Stores"
      when "top_dealers"
        name = "Home Page Top Dealers"
      when "favorite_stores"
        name = "Home Page Favorite Stores"
    end
    return name
  end

end

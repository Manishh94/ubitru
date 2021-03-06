require 'uri'
require 'cgi'

class Offer < ActiveRecord::Base
  belongs_to :vendor
  has_many :campaigns, :dependent=>:restrict
  has_many :offer_images, :dependent=>:destroy
  has_many :bids, :dependent=>:destroy
  has_attached_file :offer_video
  attr_accessible :offer_video_file_name, :offer_video_content_type, :offer_video_file_size
  
  validates :vendor_id, :presence=>true
  validates :name, :presence=>true, :length => { :maximum => 200 }
  validates :coupon_code, :length => { :maximum => 200 }
  validates :offer_url, :length => { :maximum => 200 }, :format => /[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/i , 
            :allow_blank=>true
  #parsable by URI parser        
  validate do
    unless offer_url.blank?
      begin
        URI.parse(offer_url)
      rescue
        errors.add(:offer_url, 'is invalid') #FIXME get this from i18n texts
      end
    end
  end

  attr_protected :vendor_id

  default_scope where(:is_deleted=>false)

  def editable?
    bids.index{|b| b.is_winning}.nil?
  end
  
  def trackable_offer_url auction_id
    return offer_url if offer_url.blank?
    uri = URI.parse(offer_url)
    uri.query = [uri.query.blank? ? nil : uri.query, "#{VendorTrackingEvent::AUCTION_ID_PARAM_NAME}=#{auction_id}"].
      compact.join('&')
    uri.to_s
  end

  def to_api_json
    attrs = [:name, :coupon_code, :offer_url, :offer_description, :expiration_time]
    result = attrs.inject({}) {|result, attr| result[attr] = send(attr.to_s); result}
    result[:images] = offer_images.map(&:to_api_json)
    result
  end

end

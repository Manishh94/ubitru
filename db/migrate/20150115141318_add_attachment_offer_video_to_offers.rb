class AddAttachmentOfferVideoToOffers < ActiveRecord::Migration
  def self.up
    add_column :offers, :offer_video_file_name, :string
    add_column :offers, :offer_video_content_type, :string
    add_column :offers, :offer_video_file_size, :integer
    add_column :offers, :offer_video_updated_at, :datetime
  end

  def self.down
    remove_column :offers, :offer_video_file_name
    remove_column :offers, :offer_video_content_type
    remove_column :offers, :offer_video_file_size
    remove_column :offers, :offer_video_updated_at
  end
end

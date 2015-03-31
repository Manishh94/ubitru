class AddMobileHelpContentToSystemSettings < ActiveRecord::Migration
  class SystemSettings < ActiveRecord::Base
  end
  
  def up
    SystemSettings.create({
      :name=>'mobile_help_content',
      :value=>"
      <h2>Help &amp; Contact</h2>
      <p>Use the MuddleMe app to get big savings while shopping. You can earn money with MuddleMe in many ways.</p>

      <h3>Merchants Compete to Show You Offers</h3>
      <p>You choose how many vendors your wish to contact you for the product or service you requested. They compete in a bidding war to win your business. When the auction ends you earn 70% of the cumulative value of the auction. This can add up fast!</p>
      <p>The winning merchants give you their best offers because they are vested in winning your business and don’t want to lose.</p>

      <h3>Cash Back Shopping</h3>
      <p>When you initiate an auction you will have the opportunity to view instant cash back offers from over 300 of the top merchants in the United States - up to 20% cash back. The cash back savings are for anything you purchase from that merchant, not only the item for which you initiated an auction.</p>
      <p class=\"important\">NOTE: Due to technical reasons, some merchants still are not enabled to give cash back via the mobile app. You will still see these cash back offers, but you may be directed to login to you MuddleMe account via a PC or MAC to take advantage of these earnings.</p>

      <h3>Handy Tips</h3>
      <ul>
          <li>Use the MuddleMe app when you are out shopping. Just scan the bar codes from with the app, initiate an auction, and see your instant cash back offers and bids.</li>
          <li>Combine your cash back earnings with exclusive coupon codes from over 300 merchants, all viewable from with the MuddleMe app.</li>
          <li>If you happen to be in a market with bidding merchants, you can accept their offers and still take advantage of the \"cash back shopping\" offers to stock up on accessories and related items.</li>
      </ul>
      <p>Happy Savings from the MuddleMe Team!</p>

      <h3>For more detail please visit MuddleMe.com:</h3>
      <ul class=\"unstyled\">
          <li><a href=\"http://muddleme.com/what_is_muddle_me\" target=\"_blank\">What Is Muddle Me</a></li>
          <li><a href=\"http://muddleme.com/how_it_works\" target=\"_blank\">How It Works</a></li>
          <li><a href=\"http://muddleme.com/privacy_policy\" target=\"_blank\">Privacy Policy</a></li>
          <li><a href=\"http://muddleme.com/contact\" target=\"_blank\">Contact Support</a></li>
      </ul>

      <p>&copy; Copyright 2012 MuddleMe</p>
      "
    })
  end

  def down
  end
end

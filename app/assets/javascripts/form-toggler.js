initFormToggler = function(editButton, cancelButton, fieldsWrap, enabled) {
  var show = function(){
    editButton.add(fieldsWrap.find('.to-hide')).hide();
    fieldsWrap.find('.to-show, .actions').fadeIn('normal');
  }
  if(enabled) show();
  
  editButton.live('click', function(){
    show();
  })
  
  cancelButton.live('click', function(){
    editButton.add(fieldsWrap.find('.to-hide')).fadeIn('normal');
    fieldsWrap.find('.to-show, .actions').hide();
  })
}

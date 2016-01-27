var main = function() {
  
  /*Menu Toggle*/
  $('.target').click(function() {
    $('.dropdown-menu').toggle();
  });
  
  /*Submit Event*/ 
  $('form').submit(function() {
    var email = $('#email').val();
    var password = $('#password').val();
    
    if (email === "") {
      $('.email-error').text("Please Enter Email");
    }
    
    if (password === "") {
      $('.password-error').text("Please Enter Password");
    }
    
    return false;
    
  });
  
};

$(document).ready(main);
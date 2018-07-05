
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 400) {
          $(".my-nav").addClass('my-nav__blue');
        } 
        else{
            $(".my-nav").removeClass('my-nav__blue');  	
        }
    })
  })
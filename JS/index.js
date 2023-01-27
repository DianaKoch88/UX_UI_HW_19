console.log("your index.js file is loaded correctly");

$(document).ready(function () {
  $('.navitem').click(function () {
    console.log('this has been clicked');
    debugger;

    $('.active').animate({ letterSpacing: '-=10px' });
    $(this).siblings('.active').removeClass('active');
    $(this).toggleClass('active');
    $('.active').animate({ letterSpacing: '+=10px' });
  });
});


/*$(document).ready(function(){
    $( ".navitem" ).click(function() {
         console.log("this has been clicked");

 ;
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
          $(this).animate({letterSpacing: "+=10px"});
          $(this).animate({letterSpacing: "-=10px"});
        }
        else {
        
          $(this).removeClass("active")
          
          $(this).animate({letterSpacing: "+=10px"})
          $(this).animate({letterSpacing: "-=10px"});
        }
      
      });
   
  });*/
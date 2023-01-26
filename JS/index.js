console.log('your index.js file is loaded correctly');
$(document).ready(function () {
  $('.navitem').click(function () {
    console.log('this has been clicked');

    $('.active').animate({ letterSpacing: '-=10px' });
    $(this).siblings('.active').removeClass('active');
    $(this).toggleClass('active');
    $('.active').animate({ letterSpacing: '+=10px' });
  });
});

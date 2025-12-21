$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
   var scrolled = $(window).scrollTop(); 
   $('.layer-1').css('top',(0-(scrolled*.9))+'px');
   $('.layer-2').css('top',(0-(scrolled*.75))+'px');
}


$(window).on('scroll', function () {
  const scrolled = $(window).scrollTop();

  $('.flower1').css(
    'transform',
    'rotate(' + (145 + scrolled * 0.1) + 'deg)'
  );

  $('.flower2').css(
    'transform',
    'rotate(' + (-160 - scrolled * 0.1) + 'deg)'
  );

  $('.flower3').css(
    'transform',
    'rotate(' + (-50 + scrolled * 0.1) + 'deg)'
  );

  $('.flower4').css(
    'transform',
    'rotate(' + (50 - scrolled * 0.1) + 'deg)'
  );
});

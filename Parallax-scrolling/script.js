$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
   var scrolled = $(window).scrollTop(); 
   $('.layer-1').css('top',(0-(scrolled*.25))+'px');
   $('.layer-2').css('top',(0-(scrolled*.5))+'px');
   $('.layer-3').css('top',(0-(scrolled*.75))+'px');

   $('.rock-1').css('top',(400-(scrolled*.8))+'px');
   $('.rock-2').css('top',(200-(scrolled*.6))+'px');
   $('.rock-3').css('top',(500-(scrolled*.4))+'px'); 
   $('.rock-4').css('top',(600-(scrolled*.5))+'px'); 
   $('.rock-5').css('top',(600-(scrolled*.7))+'px'); 
   $('.rock-6').css('top',(400-(scrolled*.7))+'px'); 
   $('.rock-7').css('top',(600-(scrolled*.5))+'px'); 
   $('.rock-8').css('top',(200-(scrolled*.2))+'px');
   $('.rock-9').css('top',(200-(scrolled*.4))+'px');
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

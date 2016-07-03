'use strict';
function menu(){
	$('.menu').toggle();
  
}
$('.toggle-nav').click(function(event) {
  $(document).one('click',function() {
    $('.menu').hide();
  });

  event.stopPropagation();
});
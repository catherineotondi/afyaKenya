$(document).ready(function(){
 
$('.brdisplay').hide();
$('.branch1').hover(function(){
    $(this).find('.brdisplay').toggle(500);
});

});
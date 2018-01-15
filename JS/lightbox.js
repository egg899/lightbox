$(document).ready(function(){

  $(".output").hide();
  $(".arrows").hide();
  $('.close').hide();
  $(".caption").hide();
  $("#icons").hide();
var numImages = $('div .gallery .thumb');
var imageClicked;
$('.thumb').click(function(){
 imageClicked = $(this);
var current = $(".output").html('<img class="img-responsive " src="' + imageClicked.attr('src') + '"/>').fadeIn();

var alt = imageClicked.attr('alt');



$('img').not(this).removeClass('selected');
$(this).addClass('selected');

$(".arrows").fadeIn();
$(".close").fadeIn();
//$("#icons").fadeIn();




$(".caption").text(alt).fadeIn();

//$(".imageContainer").clone(true).appendTo("#icons");

});//click


//Arrows



//console.log(numImages);
var first =numImages[0];


//Arrow Next
$('.next').click(function(){

var next = $('.selected').parent().next().find('img').addClass('selected');

$('img').not(next).removeClass('selected');
$(".output").html('<img class="img-responsive " src="' + next.attr('src') + '" />').fadeIn();
var alt = next.attr('alt');

$(".caption").text(alt).fadeIn();


if(next.length === 0){
   $(".output").html('<img class="img-responsive " src="' + $(first).attr('src') + '"/>').fadeIn();

   var alt = $(first).attr('alt');
   $(".caption").text(alt).fadeIn();

   $(first).addClass('selected');
   //$(".imageContainer").clone(true).appendTo("#icons");

}










});//next

//Arrow Prev
var last = numImages[numImages.length -1];
$('.prev').click(function(){


var prev = $('.selected').parent().prev().find('img').addClass('selected');

$('img').not(prev).removeClass('selected');
$(".output").html('<img class="img-responsive " src="' + prev.attr('src') + '"/>').fadeIn();
var alt = prev.attr('alt');
$(".caption").text(alt).fadeIn();

if(prev.length === 0){
   $(".output").html('<img class="img-responsive " src="' + $(last).attr('src') + '"/>').fadeIn();

   var alt = $(last).attr('alt');
   $(".caption").text(alt).fadeIn();
   $(last).addClass('selected');
//   $(".imageContainer").clone(true).appendTo("#icons");
}









});//last

$('.output').click(function(){
  $('.output').fadeOut();
  $('.arrows').fadeOut();
  $('.close').fadeOut();
  $('.caption').fadeOut();
  $('#icons').fadeOut();
});

$('.close').click(function(){
  $('.output').fadeOut();
  $('.arrows').fadeOut();
  $('.close').fadeOut();
  $('.caption').fadeOut();
  $('#icons').fadeOut();
});














});

$(document).ready(function(){

<<<<<<< HEAD
$("a.boom").append("<img src='img/buttons/boom.png'>");

$("a.itsnicethat").append("<img src ='img/buttons/itsnicethat.png'>");

$("a.designmilk").append("<img src = 'img/buttons/designmilk.png'>");

$("a.eyeondesign").append("<img src='img/buttons/eyedesign.png'>");

$("a.dezeen").append("<img src='img/buttons/dezeen.jpg'>");

$("a.architizer").append("<img src='img/buttons/architizer.jpg'>");

$("a.aisle").append("<img src='img/buttons/aisleone.png'>");

$("a.colossal").append("<img src='img/buttons/colossal.jpg'>");

$("a.form").append("<img src='img/buttons/fff.jpg'>");
=======
$("a.boom").append("<img src='/rightgoodstuff/img/buttons/boom.png'>");

$("a.itsnicethat").append("<img src ='/rightgoodstuff/img/buttons/itsnicethat.png'>");

$("a.designmilk").append("<img src = '/rightgoodstuff/img/buttons/designmilk.png'>");

$("a.eyeondesign").append("<img src='/rightgoodstuff/img/buttons/eyedesign.png'>");

$("a.dezeen").append("<img src='/rightgoodstuff/img/buttons/dezeen.jpg'>");

$("a.architizer").append("<img src='/rightgoodstuff/img/buttons/architizer.jpg'>");

$("a.aisle").append("<img src='/rightgoodstuff/img/buttons/aisleone.png'>");

$("a.colossal").append("<img src='/rightgoodstuff/img/buttons/colossal.jpg'>");

$("a.form").append("<img src='/rightgoodstuff/img/buttons/fff.jpg'>");
>>>>>>> 479368d5b181a81b852dd4c574aeb2095f3f879f


// touch screen click animation

$('ul li').bind('touchstart', function() {});

// about section opacity

$("nav a.nav-about").click(function(){
  $(".back-overlay").addClass("open");
  $("body").addClass("overflow");
});

$(".back-overlay").click(function(){
	$(".back-overlay").removeClass("open");
	$("body").removeClass("overflow");
});

});
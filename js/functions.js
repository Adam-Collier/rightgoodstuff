$(document).ready(function(){

$("a.boom").append("<img class='button-switch'	src='http://67.media.tumblr.com/e40508b3dda5229a6e868eaaccf428a3/tumblr_obbzjhG6RL1uupkrso1_100.png'>");

$("a.itsnicethat").append("<img src='http://66.media.tumblr.com/b40de9b52afda7468e5464d1918dd23a/tumblr_oaq9oqdxDv1uupkrso1_400.png'>");

$("a.designmilk").append("<img src='http://67.media.tumblr.com/90d6789be48aff3eb1a5b2070cea326b/tumblr_oaqa7piP9z1uupkrso1_400.png'>");

$("a.eyeondesign").append("<img src='http://66.media.tumblr.com/7fc3dae33af52d89dd6e7a6471d92d93/tumblr_oarrouyLWC1uupkrso1_400.png'>");

$("a.dezeen").append("<img src='http://66.media.tumblr.com/b9bb42ec5144ff8ded841c0aa8ee5f79/tumblr_obc0uvDtdR1uupkrso1_250.jpg'>");

$("a.architizer").append("<img src='http://66.media.tumblr.com/59cfcb27553b6722e869fd9818159075/tumblr_obc14xsQeD1uupkrso1_400.jpg'>");

$("a.aisle").append("<img src='http://65.media.tumblr.com/1d2a33bdaaae733c21a110b9228aac9f/tumblr_obc1rj10j81uupkrso1_250.png'>");

$("a.colossal").append("<img src='http://67.media.tumblr.com/45f71c98c0a3cdb8b01f5766bc50a54c/tumblr_obc20tFtcs1uupkrso1_400.jpg'>");

$("a.form").append("<img src='http://65.media.tumblr.com/fd94c5eeaff543461cf5f8142287e0e5/tumblr_obc2puiAhy1uupkrso1_400.jpg'>");

$("a.beautiful").append("<img src='http://66.media.tumblr.com/4a520e91f7f4589f661a9686d2049473/tumblr_obc30pRkJp1uupkrso1_250.jpg'>");

$("a.handsome").append("<img style='background-color: white' src='http://67.media.tumblr.com/2ed315499bc33b9acc7bb143964f3b24/tumblr_obc39ec8J71uupkrso1_250.png'>");

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
$(document).ready(function(){

//sticky scroll nav/header
const header = document.getElementById("header");
const sticky = header.offsetTop;
window.onscroll = function() {myFunction()};
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//replaces review h1 text based on screen width
if($( window ).width() < 450){
   $(".reviews-text").text("Reviews");
}else{
   $(".reviews-text").text("See What Our Customers Have To Say...");
}
});
$(window).resize(function() {
if($(window).width() < 450){
   $(".reviews-text").text("Reviews");
}else{
   $(".reviews-text").text("See What Our Customers Have To Say...");
}
});


 //hamburder menu toggle
    $('.menu-toggle').click(function(){
        $('.menu-toggle').toggleClass('active');
        $('nav').toggleClass('active');
    });
    

  
    
    
    

    






$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})


/*
$("#content-home").load("html/home.html"); 
$("#content-ourStory").load("html/ourStory.html"); 
$("#content-services").load("html/services.html"); 
$("#content-portfolio").load("html/portfolio.html"); 
$("#content-testimonial").load("html/testimonial.html"); 
$("#content-aboutUs").load("html/aboutUs.html"); 
$("#content-contact").load("html/contact.html"); 
*/


$("#header-home").on('click', function() {
  onHome();
});

$("#header-ourStory").on('click', function() {
  onOurStory();
});

$("#header-services").on('click', function() {
  onServices();
});

$("#header-portfolio").on('click', function() {
  onPortfolio();
});

$("#header-testimonial").on('click', function() {
  onTestimonial();
});

$("#header-aboutUs").on('click', function() {
  onAboutUs();
});

$("#header-contact").on('click', function() {
  onContact();
});


function onHome(){
  hideAllContent();

  $("#home").show();
}

function onOurStory(){
  hideAllContent();

  $("#ourStory").show();
}

function onServices(){
  hideAllContent();

  $("#services").show();
}

function onPortfolio(){
  hideAllContent();

  $("#portfolio").show();
}

function onTestimonial(){
  hideAllContent();

  $("#testimonial").show();
}

function onAboutUs(){
  hideAllContent();

  $("#aboutUs").show();
}

function onContact(){
  hideAllContent();

  $("#contact").show();
}

function hideAllContent(){

  $("#home").hide();
  $("#ourStory").hide();
    $("#services").hide();
      $("#portfolio").hide();
        $("#testimonial").hide();
          $("#aboutUs").hide();
           $("#contact").hide();
}


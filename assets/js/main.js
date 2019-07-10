//----landing page image carousel

var slideSet = 0;

var showSlides = () => {
  var slides = document.getElementsByClassName("mySlide")
    for(let i=0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideSet++;
      if(slideSet > slides.length) {
        slideSet = 1;
      }
      slides[slideSet - 1].style.display = 'block';
      setTimeout( showSlides , 5000);
};

showSlides();

//------map apikey section

function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 54, lng: -2 },
            zoom: 2
        });
    }

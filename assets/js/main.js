//----menu scroll hide and showSlides

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  prevScrollpos = currentScrollPos;
}

//----Menu dropdown button

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

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
      setTimeout( showSlides , 7000);
};

showSlides();

//------map apikey section

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 54, lng: -2 },
    zoom: 5
  });

  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var locations = [
    {lat: 51.501364, lng: -0.1418899999999894, info: "marker 1"}, //buckingham palace
    {lat: 51.4771, lng: -.2854}, //kew gardens
    {lat: 51.508530, lng: -0.076132}, //tower of london
    {lat: 51.503399, lng: -0.119519}, //london eye
    {lat: 58.16844, lng: -5.3037},  //Achmelvich bay
    {lat: 53.8166700, lng: -3.0500000}, //blackpool
    {lat: 53.2528, lng: -3.9751}, //llanfairfechan
    {lat: 50.444496, lng: -5.043433}, //Watergate Bay, Newquay
    {lat: 50.043404, lng: -5.654000}, //Porthcurno
    {lat: 51.1739726374, lng: -1.82237671048}, //stone hendge
    {lat: 51.38107, lng: -2.359616}, //bath, (roman baths)
    {lat: 53.961697, lng: -1.0823131}, //york minster (cathedral)
    {lat: 54.4817, lng: -3.1185}, //lake district
    {lat: 51.279778, lng: 1.0828195}, //canterbury cathedral
    {lat: 51.426717, lng: -2.356839}, //cotswolds
    {lat: 54.251186, lng: -4.463196}, //isle of mann
  ];

  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });

  });

  var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

}

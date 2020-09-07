

const locations = JSON.parse(document.getElementById('map').dataset.locations);


mapboxgl.accessToken =
  "pk.eyJ1Ijoic2VuY2hvZGV2diIsImEiOiJja2VxeHpoZmQwd3hnMndvZWkycndyMmtwIn0.6eHRycUIWzFIhhBXRduYgg";
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jonasschmedtmann/cjvi9q8jd04mi1cpgmg7ev3dy',
    scrollZoom: false
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false
  });
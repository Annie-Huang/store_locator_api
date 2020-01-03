// Copy https://www.mapbox.com/install/js/cdn-add/ in here.

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uaWVodWFuZyIsImEiOiJjazR4dTlkemQwNHNvM21zMzJreW5oMms4In0.PzYwhQUMDyneiTWXTg9s0g';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 9,
    center: [-71.157895, 42.707741]
});

maptilersdk.config.apiKey = "bWRvGwhvWfwLo6qd5KGX";

const map = (window.map = new maptilersdk.Map({
  container: "map", // container's id or the HTML element to render the map
  style: maptilersdk.MapStyle.DATAVIZ.DARK, // Change the map style here
  zoom: 14,
  center: [-94.77, 38.57],
}));

const gc = new maptilersdkMaptilerGeocoder.GeocodingControl({});

map.addControl(gc, "top-left");

new TypeIt("#element", {
  speed: 65,
  breakLines: false,

  loop: true,
}).go();

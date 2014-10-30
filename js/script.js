var map = L.map('map').setView([40.645244,-73.9449976], 11); //adds a new map to the page, 'map' refers to the name of your div
//you define the variable map so that you can refer to it later
//setview tells you where to start the map, after the comma comes the zoom level

var myIcon = L.icon({
    iconUrl: 'images/Seymour_icon.png',
    iconSize: [36, 36],
    popupAnchor: [0,-16]
});

L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16
}).addTo(map);


// add a marker in the given location, attach some popup content to it and open the popup
L.marker([40.724444,-73.943358], {icon: myIcon}).addTo(map)
    .bindPopup('<p>Early AM <br />soccer</p>');

L.marker([40.6699957,-73.9702993], {icon: myIcon}).addTo(map)
	.bindPopup('<p>Frenchie Meetups<br />Prospect Park</p>');

L.marker([40.56321,-73.883314], {icon: myIcon}).addTo(map)
	.bindPopup('<p>Fort Tilden beach</p>');

L.marker([40.720042,-73.952907], {icon: myIcon}).addTo(map)
	.bindPopup('<p>Farmers market</p>');

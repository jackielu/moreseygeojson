var buttonid;
var isHeThere;
var mID;
var picID;
var data;

var map = L.map('map',{zoomControl:false}).setView([40.7305404,-73.949101], 12); //adds a new map to the page, 'map' refers to the name of your div
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

//this adds a new zoom control in the specified position.  requires setting zoomControl:false in L.map
L.control.zoom({position: "topright"}).addTo(map);


//load external geoJSON
$.getJSON('/data/data_v2.geojson', function(data){
	//console.log(data);
	var geojsonLayer = L.geoJson(data.features, {
		onEachFeature: makeMarker, pointToLayer:putMarker
	}).addTo(map);
});


// define a function for popUps and the JSON property to pull from
function makeMarker (feature, layer) {
	var thisFeature = feature.properties;

	//bind a leaflet popup to the marker
	layer.bindPopup (
		thisFeature.locDescrp	
		);
	//to try and grab the click event
	layer.on("click",function(e){
		console.log(thisFeature.locName);
//		console.log(e); //this is also where you put the function to select something and apply a CSS (i.e. define a behavior)
	})
};

//this function attaches the custom icon to the location
function putMarker(feature,latlng) {
	return L.marker(latlng, {icon:myIcon})
}

//defines what happens on marker mouseovers - attempte version for geoJSON
function onMouseOver(feature, layer) {
	layer.on('mouseover', function() {console.log(feature.properties.title)});
	var mID = '#'.concat(this.properties.title);  //construct the needed ID selector 
	console.log(mID);
	$(mID).toggleClass('hover');
}


//defines what happens on marker clicks
function onClick(e) {  //e is the event
	//console.log(this.options.pic);
	//console.log('url('.concat(this.options.pic).concat(')'));
	var picID = 'url('.concat(this.options.pic).concat(')');
	//console.log(this.options.title);  //return the title of the marker when it is clicked on 
	var isHeThere = Math.floor((Math.random() * 100) + 1);  //random number pull
	//console.log(isHeThere);
	if (isHeThere < 35) {
		$('.jackpot').fadeIn(250);
		$('#image').css('background-image',picID).fadeIn(250);}
		else {
			$('.tryAgain').fadeIn(250);
		}
	
}


//defintes what happens on marker mouseovers
//function onMouseOver(e) {
//	//console.log(this.options.title); //return the title of the marker being moused over
//	var mID = '#'.concat(this.options.title);  //construct the needed ID selector 
//	//console.log(mID);
//	$(mID).toggleClass('hover');
//}


//define what happens on marker mouseouts
function onMouseOut(e) {
	var mID = '#'.concat(this.options.title);
	$(mID).toggleClass('hover');
	$('.tryAgain').fadeOut(250);
	$('.jackpot').fadeOut(250);
	$('#image').fadeOut(250);
}



//listeners for place button clicks
$('.place').on('click',function(){
	console.log(this);  //what did you click on?
    buttonid = $(this).attr("id"); //get the ID value of the element you clicked on
    console.log(buttonid);  //print value of buttonid
    geojsonLayer.eachLayer(function(marker)
    {
    	if(buttonid == marker.feature.properties.locName) {
    		console.log(marker._latlng);
    		map.panTo(marker._latlng);
    		marker.openPopup();
    	}
    })
});



//listeners for place button hovers
$('.place').hover(function(){
	// console.log(this);
	$(this).toggleClass('hover');
},function(){
	$(this).toggleClass('hover');
});


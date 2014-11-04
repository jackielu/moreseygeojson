var buttonid;
var isHeThere;
var mID;
var picID;

var map = L.map('map').setView([40.7305404,-73.949101], 12); //adds a new map to the page, 'map' refers to the name of your div
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



//define the location markers, along with a title, and a function called onClick that runs when you click on the marker

var bday = L.marker([41.077333,-73.501891], {icon: myIcon, title: 'bday', alt: 'where Seymour was born and his littermates still live', pic: '/images/littermates.jpg'})
	.addTo(map)
	.on('click',onClick)
	.on('mouseover',onMouseOver)
	.on('mouseout',onMouseOut);

var mkt = L.marker([40.720042,-73.952907], {icon: myIcon, title: 'mkt', alt: 'a place full of yummy food smells', pic: '/images/cobble.jpg'})
	.addTo(map)
	.on('click',onClick)
	.on('mouseover',onMouseOver)
	.on('mouseout',onMouseOut);

var soccer = L.marker([40.724444,-73.943358], {icon: myIcon, title: 'soccer', alt: 'nice grass fields for chasing the ball', pic: '/images/soccer.jpg'})
	.addTo(map)
	.on('click',onClick)
	.on('mouseover',onMouseOver)
	.on('mouseout',onMouseOut);

var beach = L.marker([40.56321,-73.883314], {icon: myIcon, title: 'beach', alt: 'fun with seagulls and waves', pic: '/images/beach.jpg'})
	.addTo(map)
	.on('click',onClick)
	.on('mouseover',onMouseOver)
	.on('mouseout',onMouseOut);

var meetup = L.marker([40.6699957,-73.9702993], {icon: myIcon, title: 'meetup', alt: 'where seymour plays with his fellow frenchies', pic: '/images/meetup.jpg'})
	.addTo(map)
	.on('click',onClick)
	.on('mouseover',onMouseOver)
	.on('mouseout',onMouseOut);

var camping = L.marker([40.200983,-74.300908], {icon: myIcon, title: 'camping', alt: 'this is where seymour went camping for the first time', pic: '/images/turkeyswampcamp.jpg'})
	.addTo(map)
	.on('click',onClick)
	.on('mouseover',onMouseOver)
	.on('mouseout',onMouseOut);

var fort = L.marker([40.794196,-73.77565], {icon: myIcon, title: 'fort', alt: 'dog-friendly field station where jackie brings seymour to work', pic: '/images/fort2.jpg'})
	.addTo(map)
	.on('click',onClick)
	.on('mouseover',onMouseOver)
	.on('mouseout',onMouseOut);

var licH2o = L.marker([40.7430715,-73.9600146], {icon: myIcon, title: 'licH2o', alt: 'a dog run with a view of Manhattan!', pic: '/images/picnictable2.jpg'})
	.addTo(map)
	.on('click',onClick)
	.on('mouseover',onMouseOver)
	.on('mouseout',onMouseOut);


//defines what happens on marker clicks
function onClick(e) {
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
function onMouseOver(e) {
	//console.log(this.options.title); //return the title of the marker being moused over
	var mID = '#'.concat(this.options.title);  //construct the needed ID selector 
	//console.log(mID);
	$(mID).toggleClass('hover');
}


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
	// console.log(this);  //what did you click on?
    buttonid = $(this).attr("id"); //get the ID value of the element you clicked on
    // console.log(buttonid);  //print value of buttonid
    map.panTo(window[buttonid].getLatLng(),{animate: true, duration:3});
    // console.log(window[buttonid].options.title); //the title of the marker
    //console.log(window[buttonid].options.alt); //the text for the location
    window[buttonid].bindPopup(String(window[buttonid].options.alt)).openPopup(); //open a pop-up with description corresponding to the marker
});



//listeners for place button hovers
$('.place').hover(function(){
	// console.log(this);
	$(this).toggleClass('hover');
},function(){
	$(this).toggleClass('hover');
});


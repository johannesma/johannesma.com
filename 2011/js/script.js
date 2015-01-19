jQuery(function($){
  	//twitter
	$('section#twitter article').tweet({
	            username: "johannesma",
	            join_text: "auto",
	            avatar_size: 0,
	            count: 1,
	            auto_join_text_default: "",
	            auto_join_text_ed: "",
	            auto_join_text_ing: "",
	            auto_join_text_reply: "",
	            auto_join_text_url: "",
	            loading_text: ""
			});

	//follow button
	$('iframe.twitter-follow-button').css('width','200px');

});


var map;

function sfMap() {
   	// Create an array of styles.
	  var newstyles = [
	    {
	      featureType: "all",
	      stylers: [
	        { saturation: -80 }
	      ]
	    }
	  ];

	  // Create a new StyledMapType object, passing it the array of styles,
	  // as well as the name to be displayed on the map type control.
	  var newMapType = new google.maps.StyledMapType(newstyles);
	
   var myOptions = {
     zoom: 12,
     center: new google.maps.LatLng(37.82,-122.42),
	 disableDefaultUI: true,
     mapTypeId: google.maps.MapTypeId.TERRAIN
   };
   map = new google.maps.Map(document.getElementById('map-canvas'),
       myOptions);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('', newMapType);
  map.setMapTypeId('');
 }

 function pghMap() {
   	// Create an array of styles.
	  var newstyles = [
	    {
	      featureType: "all",
	      stylers: [
	        { saturation: -80 }
	      ]
	    }
	  ];

	  // Create a new StyledMapType object, passing it the array of styles,
	  // as well as the name to be displayed on the map type control.
	  var newMapType = new google.maps.StyledMapType(newstyles);

   var myOptions = {
     zoom: 12,
     center: new google.maps.LatLng(40.441667, -79.95),
	 disableDefaultUI: true,
     mapTypeId: google.maps.MapTypeId.TERRAIN
   };
   map = new google.maps.Map(document.getElementById('map-canvas'),
       myOptions);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('', newMapType);
  map.setMapTypeId('');
 }

 // When ready...
 window.addEventListener("load",function() {
  // Set a timeout...
  setTimeout(function(){
    // Hide the address bar!
    window.scrollTo(0, 1);
  }, 0);
 });

 var Pittsburgh = document.getElementById('pgh');
 google.maps.event.addDomListener(Pittsburgh, 'mouseover', pghMap);

 var SanFran = document.getElementById('sf');
 google.maps.event.addDomListener(SanFran, 'mouseover', sfMap);

















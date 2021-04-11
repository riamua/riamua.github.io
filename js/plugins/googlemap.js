// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
function init() {
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 13
        ,
        center: new google.maps.LatLng(37.540830, -122.298880), // San Mateo
        styles: [
            {
                "featureType": "all"
                , "elementType": "geometry.fill"
                , "stylers": [
                    {
                        "visibility": "on"
					}
                    , {
                        "saturation": "11"
					}
				]
			}
            , {
                "featureType": "administrative"
                , "elementType": "labels.text.fill"
                , "stylers": [
                    {
                        "color": "#455770000"
					}
				]
			}
            , {
                "featureType": "administrative.country"
                , "elementType": "labels.text.fill"
                , "stylers": [
                    {
                        "lightness": "-30"
					}
				]
			}
            , {
                "featureType": "administrative.neighborhood"
                , "elementType": "geometry"
                , "stylers": [
                    {
                        "saturation": "-43"
					}
                    , {
                        "lightness": "-19"
					}
                    , {
                        "gamma": "1.87"
					}
				]
			}
            , {
                "featureType": "administrative.neighborhood"
                , "elementType": "labels.text"
                , "stylers": [
                    {
                        "weight": "3.96"
					}
                    , {
                        "gamma": "1.88"
					}
                    , {
                        "lightness": "-12"
					}
                    , {
                        "saturation": "-100"
					}
				]
			}
            , {
                "featureType": "landscape"
                , "elementType": "all"
                , "stylers": [
                    {
                        "color": "#f2f2f2"
					}
				]
			}
            , {
                "featureType": "poi"
                , "elementType": "all"
                , "stylers": [
                    {
                        "visibility": "off"
					}
				]
			}
            , {
                "featureType": "road"
                , "elementType": "all"
                , "stylers": [
                    {
                        "saturation": -100
					}
                    , {
                        "lightness": 45
					}
				]
			}
            , {
                "featureType": "road.highway"
                , "elementType": "all"
                , "stylers": [
                    {
                        "visibility": "simplified"
					}
				]
			}
            , {
                "featureType": "road.arterial"
                , "elementType": "labels.icon"
                , "stylers": [
                    {
                        "visibility": "off"
					}
				]
			}
            , {
                "featureType": "transit"
                , "elementType": "all"
                , "stylers": [
                    {
                        "visibility": "off"
					}
				]
			}
            , {
                "featureType": "water"
                , "elementType": "all"
                , "stylers": [
                    {
                        "color": "#455770000"
					}
                    , {
                        "visibility": "on"
					}
				]
			}
            , {
                "featureType": "water"
                , "elementType": "geometry"
                , "stylers": [
                    {
                        "saturation": "9"
					}
                    , {
                        "color": "#edd5cf"
					}
				]
			}
		]
    };
    var mapElement = document.getElementById('contactMap');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(37.540830, -122.298880)
        , map: map
        , title: 'San Mateo'
    });
}
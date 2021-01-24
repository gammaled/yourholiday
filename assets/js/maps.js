function initMap() {

    // load the map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40, lng: -100},
        zoom: 4,
        styles: mapStyle
    });

    var mapStyle = [{
        'featureType': 'all',
        'elementType': 'all',
        'stylers': [{'visibility': 'off'}]
    }, {
        'featureType': 'landscape',
        'elementType': 'geometry',
        'stylers': [{'visibility': 'on'}, {'color': '#fcfcfc'}]
    }, {
        'featureType': 'water',
        'elementType': 'labels',
        'stylers': [{'visibility': 'off'}]
    }, {
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': [{'visibility': 'on'}, {'hue': '#5f94ff'}, {'lightness': 60}]
    }];
}
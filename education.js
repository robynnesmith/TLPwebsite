function initMap() {
    let maps = [
        ['Singapore', document.getElementById('sgmap'), 1.355223, 103.867787],
        ['Bath', document.getElementById('bathmap'), 51.378165, -2.327254]
    ];
    maps.forEach(function (map) {
        var coordinates = { lat: map[2], lng: map[3] };
        var googleMap = new google.maps.Map(map[1], {
            zoom: 10,
            center: coordinates
        });
        var marker = new google.maps.Marker({
            position: coordinates,
            map: googleMap
        });
        google.maps.event.addDomListener(window, "resize", function() {
            var center = googleMap.getCenter();
            google.maps.event.trigger(googleMap, "resize");
            googleMap.setCenter(center); 
        });
    });
}

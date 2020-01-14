var myMap = L.map( 'mapid').setView([10.08391,-84.47795], 10);
L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom:17,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(myMap);
var markerClusters = L.markerClusterGroup();
 
for ( var i = 0; i < markers.length; ++i )
{
 
  var m = L.marker( [markers[i].lat, markers[i].lng])
                  .bindPopup( '<p> <strong>' +  markers[i].name + '</strong><br></p>' );
 
  markerClusters.addLayer( m );
}
 
myMap.addLayer( markerClusters );
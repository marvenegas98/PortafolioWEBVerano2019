var OpenTopoMap = L.map('mapid').setView([10.08391,-84.47795], 10);
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(OpenTopoMap);
var waypoints=[]
for ( var i=0; i <nodes.length; ++i ) 
{
	waypoints.push(L.latLng(nodes[i].lat,nodes[i].lng))
}
L.Routing.control({
	waypoints: waypoints
  }).addTo(OpenTopoMap);
for ( var i=0; i <nodes.length; ++i ) 
{
	L.marker([nodes[i].lat, nodes[i].lng])
	.bindPopup( '<p> <strong>' +  nodes[i].name + '</strong><br>' + nodes[i].description + '</p>' )
	.addTo(OpenTopoMap);
}
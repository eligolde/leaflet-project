let map = L.map('#map').setView([28.041092,-82.489094], 6.17);

L.tileLayer('https://api.mapbox.com/styles/v1/egolde/clalbxin2003b14ljgc11xty9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZWdvbGRlIiwiYSI6ImNsYWxheTVlczAzbXkzb28ycHpydWpzc2gifQ.ScmqZQFSGUL-lSO4_JA0Ag', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

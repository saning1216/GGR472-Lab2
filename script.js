mapboxgl.accessToken = 'pk.eyJ1Ijoic2FuaW5nMTIxNiIsImEiOiJjbHMyOWZleTgwaWVnMmtvOWphdnlxM3liIn0.z0dydDvm-LW0qRPM0BgsGw'
const map = new mapboxgl.Map({
	container: 'my-map', // container ID
	style: 'mapbox://styles/saning1216/clsmnuv5v043f01pbdar9772u', // style URL
	center: [-79.39, 43.66], // starting position [lng, lat]
	zoom: 13, // starting zoom
});

map.on('load', function () {
    // Add a data source containing GeoJSON data
    map.addSource('uoft-data', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {
                    "name": "Sidney Smith Hall"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-79.39865237301687, 43.662343395037766]
                }
            }]
        }
    });
    // Add a layer to represent the data 
    map.addLayer({
        'id': 'uoft-pnt',
        'type': 'circle',
        'source': 'uoft-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#663399'
        }
    });
});
  
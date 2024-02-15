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
    map.addLayer({
        'id': 'uoft-label',
        'type': 'symbol',
        'source': 'uoft-data',
        'layout': {
            'text-field': ['get', 'name'], // Use the 'name' property for the label
            'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
            'text-radial-offset': 0.5,
            'text-justify': 'auto',
            'text-size': 12
        },
        'paint': {
            'text-color': '#0000cd'
        }
    });
});

map.on('load', function () {
    // Add GeoJSON source from a remote URL
    map.addSource('buildings-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/saning1216/GGR472-Lab2/main/buildings.geojson'
    });

    // Add layer to visualize the source as circle points
    map.addLayer({
        'id': 'buildings-point',
        'type': 'circle',
        'source': 'buildings-data',
        'paint': {
            'circle-radius': 5,
            'circle-color': '#ff7f50'
        }
    });

    // Add layer for building labels
    map.addLayer({
        'id': 'buildings-label',
        'type': 'symbol', 
        'source': 'buildings-data', 
        'layout': {
            'text-field': ['get', 'buildingname'], // Access the "buildingname" property for label text
            'text-variable-anchor': ['top', 'bottom', 'left', 'right'], // Allows the label to move to avoid overlap
            'text-radial-offset': 0.5, // Distance from the point to the text
            'text-justify': 'auto',
            'text-size': 12 
        },
        'paint': {
            'text-color': '#0000cd' // Set the text color
        }
    });
});


map.on('load', function () {
    // Add a data source from a Mapbox tileset
    map.addSource('grass', { // Create your own source ID
        'type': 'vector',
        'url': 'mapbox://saning1216.4uskxlxq' // Update to your Mapbox tileset ID
    });

    map.addLayer({
        'id': 'grass-polygon', // Create your own layer ID
        'type': 'fill', // Note this is different from point data
        'source': 'grass', // Must match source ID from addSource method
        'source-layer': 'grass-21pqgp', // Tileset name (different from ID), get this from Mapbox tileset page
        'paint': {
            'fill-color': '#a6d608', 
            'fill-opacity': 0.7,
            'fill-outline-color': 'green'
        }
    }); 
})


// Add a data source from a Mapbox tileset
map.addSource('grass', { // Create your own source ID
    'type': 'vector',
    'url': 'mapbox://saning1216.cc2swx0b' // Update to your Mapbox tileset ID
});

map.addLayer({
    'id': 'grass-polygon', // Create your own layer ID
    'type': 'fill', // Note this is different from point data
    'source': 'grass', // Must match source ID from addSource method
    'source-layer': 'map-8rnchz', // Tileset name (different from ID), get this from Mapbox tileset page
    'paint': {
        'fill-color': '#888888', // Test alternative colours and style properties
        'fill-opacity': 0.4,
        'fill-outline-color': 'green'
    }
}, 'uoft-buildings'); // Optionally, specify the ID of another layer to place this one before it

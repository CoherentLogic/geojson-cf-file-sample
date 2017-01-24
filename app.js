//
// geojsonObject is a global variable containing valid GeoJSON;
// this is what we will write to the server, and is analagous
// to the GeoJSON you'd get back from your GMap.
//
var geojsonObject = {
    'type': 'FeatureCollection',
    'crs': {
        'type': 'name',
        'properties': {
            'name': 'EPSG:3857'
        }
    },
    'features': [{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [0, 0]
        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'LineString',
            'coordinates': [[4e6, -2e6], [8e6, 2e6]]
        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'LineString',
            'coordinates': [[4e6, 2e6], [8e6, -2e6]]
        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Polygon',
            'coordinates': [[[-5e6, -1e6], [-4e6, 1e6], [-3e6, -1e6]]]
        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'MultiLineString',
            'coordinates': [
		[[-1e6, -7.5e5], [-1e6, 7.5e5]],
		[[1e6, -7.5e5], [1e6, 7.5e5]],
		[[-7.5e5, -1e6], [7.5e5, -1e6]],
		[[-7.5e5, 1e6], [7.5e5, 1e6]]
            ]
        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'MultiPolygon',
            'coordinates': [
		[[[-5e6, 6e6], [-5e6, 8e6], [-3e6, 8e6], [-3e6, 6e6]]],
		[[[-2e6, 6e6], [-2e6, 8e6], [0, 8e6], [0, 6e6]]],
		[[[1e6, 6e6], [1e6, 8e6], [3e6, 8e6], [3e6, 6e6]]]
            ]
        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'GeometryCollection',
            'geometries': [{
		'type': 'LineString',
		'coordinates': [[-5e6, -5e6], [0, -5e6]]
            }, {
		'type': 'Point',
		'coordinates': [4e6, -5e6]
            }, {
		'type': 'Polygon',
		'coordinates': [[[1e6, -6e6], [2e6, -4e6], [3e6, -6e6]]]
            }]
        }
    }]
};

//
// newJSON will contain the contents of file.json from the server when
// it is loaded.
//
var newJSON = null;

//
// pageInit() is called by the onLoad event of default.cfm to display
// the GeoJSON string in the page.
//
function pageInit() 
{
    document.getElementById("json").innerHTML = JSON.stringify(geojsonObject);
}

//
// submitJSON() will build up the AJAX request and POST it to write_json.cfm
// and is called when you click "Save JSON to Server" in default.cfm
//
// write_json.cfm will write the contents of JS variable geojsonObject to the
// file "file.json" on the server.
//
function submitJSON()
{
    var postData = new FormData();
    var postURL = "write_json.cfm";

    // adds the GeoJSON object to the body of the POST request.
    postData.append('geojson', JSON.stringify(geojsonObject));

    var xhr = new XMLHttpRequest();
    xhr.open('POST', postURL, true);
    xhr.onload = function () {
	// populate Server Response div with response from the server when 
	// the AJAX request completes, and show the "Read JSON from Server" button.
	document.getElementById("response").innerHTML = this.responseText;
	document.getElementById("readJSON").style.display = "inline";
    };
    xhr.send(postData);
}

//
// readJSON() is called from default.cfm's "Read JSON from Server" button to
// load the JSON file into the "File Read from Server" div. You could also
// call this from a different page, i.e. to load polygons into a GMap.
//
// This builds up an AJAX request to GET read_json.cfm, which will bring in
// the contents of file.json on the server.
//
function readJSON()
{
    var getURL = "read_json.cfm";
    var xhr = new XMLHttpRequest();

    xhr.open('GET', getURL, true);
    // populate fileRead div with the response text and set newJSON variable
    // to the contents of the data retrieved from file.json on the server.
    xhr.onload = function () {
	document.getElementById("fileRead").innerHTML = this.responseText;
	newJSON = JSON.parse(this.responseText);
    };
    xhr.send();
}
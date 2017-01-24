<cfsetting showDebugOutput="No">
<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>JSON Sample</title>

	<style>
		.wrapper { border: 1px solid black; padding: 8px; margin: 8px; background-color:#efefef; }
	</style>
</head>
<body onload="pageInit()">
	<h1>JSON to Server File Sample</h1>

	<h2>GeoJSON Code</h2>

	<div id="json" class="wrapper">
		JSON will load here.
	</div>

	<h2>Server Response</h2>
	<div id="response" class="wrapper">
		Please click &quot;Save JSON to Server&quot;.
	</div>

	<h2>File Read from Server</h2>
	<div id="fileRead" class="wrapper">
		Save the JSON first, then you can read it in.
	</div>

	<button onclick="javascript:submitJSON();">Save JSON to Server</button><hr>
	<button id="readJSON" style="display:none;" onclick="javascript:readJSON()">Read JSON from Server</button>
	<script src="app.js"></script>
</body>
</html>

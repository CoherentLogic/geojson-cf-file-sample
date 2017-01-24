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
<body>
	<!--- retrieve the geojson field from the POSTed form --->
	<cfset geojson=form.geojson>

	<h2>GeoJSON Received</h2>
	<div class="wrapper"><cfoutput>#geojson#</cfoutput></div>

	<cfset path=expandPath(".") & "/file.json">

	<h2>Saving to <cfoutput>#path#</cfoutput></h2>

	<cffile action="write" file="#path#" output="#geojson#">

</body>
</html>

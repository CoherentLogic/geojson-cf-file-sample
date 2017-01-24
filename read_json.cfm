<cfsetting showDebugOutput="No">
<cfcontent type="application/json">
<cfset path=expandPath(".") & "/file.json">
<!--- read file.json into CF variable "geoJSON" --->
<cffile action="read" file="#path#" variable="geoJSON">
<cfoutput>#geoJSON#</cfoutput>

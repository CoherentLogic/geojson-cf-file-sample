<cfcomponent output="true" access="remote">

	<cffunction name="writeJSON" access="remote" output="true" returntype="void">
		<!--- here you would replace this logic with logic to write to your DB --->
		<cfset path = expandPath(".") & "/file.json">
		<cffile action="write" file="#path#" output="#form.geojson#">
		<cfoutput>#form.geojson#</cfoutput>
	</cffunction>

	<cffunction name="readJSON" access="remote" output="true" returntype="void">
		<cfcontent type="application/json">
		<cfset path = expandPath(".") & "/file.json">
		<cffile action="read" file="#path#" variable="geoJSON">
		<cfoutput>#geoJSON#</cfoutput>
	</cffunction>

</cfcomponent>

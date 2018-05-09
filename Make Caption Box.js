/*
File: Make Caption Box.js
Description: This script creates a caption box for the selected box
*/

//import basic checks
if (typeof (isLayoutOpen) == "undefined") {
	//import basic checks
	app.importScript(app.getAppScriptsFolder() + "/Dependencies/qx_validations.js");
	console.log("Loaded library qx_validations.js for basic validation checks.");
}

if (typeof (makeCaption) == "undefined") {
	//load the script to create a caption box
	app.importScript(app.getAppScriptsFolder() + "/Dependencies/qx_create_box.js");
	console.log("Loaded library create_box.js for box creation.");
}

if (isLayoutOpen()) {
	if (isBoxSelected()) {
		//get selected box
		let box = app.activeBoxesDOM()[0];

		//make the caption box
		makeCaption(box);
	}
}

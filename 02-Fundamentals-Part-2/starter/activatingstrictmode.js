//Activating Strict Mode
"use strict";
// strict mode forbids us to do certain things
// it creates visible errors and developer console, where in other situations JS would just fail silently

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("i can drive");

// const interface = "Audio";
// const private = 455;

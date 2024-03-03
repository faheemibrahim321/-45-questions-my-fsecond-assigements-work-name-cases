"use strict";
//1st lower case; 2nd upper case ;title case;
let personName = "hafiz muhammad faheem";
console.log("lowercase: ", personName.toLowerCase());
// upper case 
console.log("uppercase:", personName.toLocaleUpperCase);
//titlecase 
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));

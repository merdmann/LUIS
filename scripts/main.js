console.log("main.js called");

var lib = require(["scripts/lib"]);

lib.hello();

$(document).ready( function() {
  
    document.getElementById("btn-process").addEventListener("click", function() {  
        var input = $("#input").val();
        console.log("Button click " + input);
    });
});


var rect = require("rect");
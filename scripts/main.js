

console.log("main.js called");

requirejs.config({
    baseUrl: 'scripts',
    paths: {
    }
});

var lib = require(["scripts/lib"]);

lib.hello();


//var api = require(["scripts/api.js"]); 

//console.log(api);

$(document).ready( function() {
    //var api = new api.Api( "fa7b1bb6-ab5f-4090-ad59-6ea5381a181d", "21e09a93077d410fa9b3a63b07732960" )

    document.getElementById("btn-process").addEventListener("click", function() {  
        var input = $("#input").val();
        console.log("Button click " + input);
    });
});
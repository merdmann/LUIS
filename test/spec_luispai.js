// File api.js
// Copyright (c) 2018 Michael Erdmann
//
// Permission is hereby granted, to any person obtaining a copy of this software and associated 
// documentation files (the "Software"), to deal in the Software without restriction, including 
// without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
// copies of the Software, and to permit persons to whom the Software is furnished to do so, 
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or 
// substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT 
// NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// 

var R = require("requirejs");

R.config({
    //Use node's special variable __dirname to
    //get the directory containing this file.
    //Useful if building a library that will
    //be used in node but does not require the
    //use of node outside
    baseUrl: __dirname + "/../scripts",
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require,

    paths: {
        //"jquery" : "jquery-3.3.1",
        "config" : "config",
        "api"    : "api",
        "aframe" : "aframe.min"
    }
});


var key="21e09a93077d410fa9b3a63b07732960";
var appId="fa7b1bb6-ab5f-4090-ad59-6ea5381a181d";
var A = null;
var rsp = null;

// This thing will instanciate the LUIS API.
beforeAll( function ( done ) { 
    setTimeout(function() {
        R(["api",/* "jquery"*/], function(api, jq) {
           A =  new api(key,appId);
           rsp = A.request("fire torpedo");
        })
        done();
      }, 990);
 }, 1000);


describe("Setting up the LUIS API", function() {
    it("API is a defined Object", function() {
        expect(A).toBeDefined();
        expect(rsp).toBeDefined();
    })
})

describe("sending a simple text", function() { 
    it("always will fail ", function() { fail() });
});

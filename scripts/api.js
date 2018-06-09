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
'use strict';
define( ["jquery"], function( jQuery) {
      
    var LUIS = function( key, appId) {
            this.appId = appId;
            this.key = key;
            this.name = "Mother";
            this.query = null;
            this.endpoint = "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/";
            this.defered = null;
    }
    

    LUIS.prototype.getEndPoint = function() { return this.endpoint + this.appId; };

    LUIS.prototype.request = function(query) {
        const endPoint = this.getEndPoint();
        const key = this.key;
        this.query = query;

        var defered = new Promise(function(resolve, reject){
            jQuery.get( 
                endPoint,
                { "subscription-key" : key, "timezoneOffset": 0, "verbose" : true, "q": query }, 
                    function (data,textstatus, jqxhdr) {
                        if( textstatus !== "success") {
                            reject(textstatus);
                        }
                        else 
                            resolve(data);
                    },
                "json" );
        });

        return defered;
    }

    return LUIS;     
});
        


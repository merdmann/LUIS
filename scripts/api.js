
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
            
        /*request( query ) {
            this.defered = new Promise(
                function( resolve, reject) {
                    const _endPoint_ = this.getEndPoint();

                    jQuery.get(_endPoint_, {
                        "subscription-key": this.key,
                        "verbose": true, 
                        "timezoneOffset": 0, 
                        "q" :query }, 
                        function( data, textstatus, jqxhdr ) {             
                            console.log(textstatus);
                            if(textstatus !== "Sucess") {
                                reject(textstatus);    
                            }
                            else {
                                resolve(data);
                            }
                    }, "json"); 
                });
            return this.defered 
        };*/

    LUIS.prototype.display = function(){
            console.log(this.appId);
            console.log(this.key);
            console.log(this.name);
            console.log(this.query);
    }
    
    return LUIS;     
});
        


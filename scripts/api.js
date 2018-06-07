define( ["jquery"], function( jQuery) {
        return {
            "LUIS" : function( app, key ) {
                console.log(app, key);
                this.appId = app;
                this.key = key;
                this.name = "Mother"
                this.query = null;
                this.endpoint = "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/";

                this.defered = new Promise(
                    function( resolve, reject) { 
                        jQuery.get(this.endpoint+this.appId, {
                        "subscription-key": this.key,
                        "verbose": true, 
                        "timezoneOffset": 0, 
                        "q" : this.query }, 
                        function( data, textstatus, jqxhdr ) { 
                                
                            console.log(textstatus);
                            if(textstatus !== "Sucess") {
                                reject(textstatus);
                            }
                            else {
                                resolve(data);
                            }
                        },
                        "json");
                    }
                    );
                    return this.defered;
                },
            "request": function(query) {
                this.query = query;
                this.defered.then(function(data) { console.log(data); });
                return this.defered;
            }
        }
    });



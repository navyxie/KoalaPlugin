var noop = function(){};
var koala = {
    do:function(content,scbf,ecbf){
        cordova.exec(scbf || noop,ecbf || noop,"KoalaPlugin","do",[content]);
    }
};
module.exports = koala;


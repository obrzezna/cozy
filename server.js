var americano = require('americano');

var port = process.env.PORT || 80 ;
var host = process.env.HOST || "0.0.0.0" ; 
americano.start({name: 'bookmark', port: port, host: host}, function(app) {
    app.set('views',  __dirname + '/client');
    app.engine('.html', require('jade').__express);
});

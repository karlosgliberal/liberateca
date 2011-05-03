var Liberateca = require('../lib/liberateca').Liberateca

var datos = new Liberateca('/api/v1/series', 'usuario', 'password', function(error, data){
    console.log(data);
});


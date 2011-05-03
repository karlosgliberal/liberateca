var Liberateca = require('../lib/liberateca').Liberateca

var hola = new Liberateca('/api/v1/series', function(error, data){
  for(id in data){
    console.log(data[id].name);
  }
});


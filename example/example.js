var liberateca = require('../lib/liberateca');

var datos = liberateca.getSeries('user','password', function(resultados){
  console.log(resultados);
});



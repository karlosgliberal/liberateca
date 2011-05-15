var https = require('https');


var resultado = function(response){
    return response;
}

exports.getSeries = function(user, pass, callback){
  console.log(callback);
  var auth = new Buffer(user + ':' + pass).toString('base64');
  var options = {
      host: 'liberateca.net',
      port: 443,
      path: '/api/v1/series/',
      method: 'GET',
      headers: { 
        'Content-type': 'application/json', 
        'Authorization': 'Basic ' + auth
      }
  };
  
  var req = https.get(options, function(res) {
    res.body = '';
    res.setEncoding('utf8');

    res.on('data', function(chunk) {
      res.body += chunk;
    });
    res.on('end', function(){
      callback.call(null, resultado(res.body));
    })
    }).on('error', function(e) {
      console.error(e);
  });
}

var sys = require('sys'),
    http = require('http'),
    API_URI ='liberateca.net';


var Liberateca = exports.Liberateca = function(api_token, callback){
   makeRequest(api_token , returnObjectFromJSON(callback));
}

//  Wraps the callback function to convert the output to a javascript object
var returnObjectFromJSON = function(callback){
  return function(err, jsonString){
    callback(err , JSON.parse(jsonString));
  }
}

Liberateca.prototype.getTask = function(api_token, callback) {
   makeRequest(api_token , returnObjectFromJSON(callback));
}

var makeRequest = function(path , callback){
  var user = 'tuusuario';
  var password = 'tupass';
  var auth = new Buffer(user + ':' + password).toString('base64');
  var headers = {
    'Content-Type':'application/json',
    'host': 'liberateca.net',
    'Authorization': 'Basic ' + auth 
  }

  var client = http.createClient(80, 'liberateca.net', true);
  var request = client.request('GET', path , headers);

  var data = '';
  request.on('response', function (response) {
    response.on('data', function (chunk) {
      data += chunk;
    });
    response.on('end', function () {
      if(response.statusCode == 200){
        callback(null, data);
      }else{
        callback(new Error('Response Status code: ' + response.statusCode), data);
        console.log(response)
      }
    });
    response.on('error', function (error) {
      callback(error , data);
    });
  });
  request.end();
}

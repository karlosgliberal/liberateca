var sys = require('sys'),
    http = require('http');

var Liberateca = exports.Liberateca = function(path, user, pass, callback){
   makeRequest(path, user, pass, returnObjectFromJSON(callback));
}

//  Wraps the callback function to convert the output to a javascript object
var returnObjectFromJSON = function(callback){
  return function(err, jsonString){
    callback(err , JSON.parse(jsonString));
  }
}

Liberateca.prototype.getTask = function(path, user, pass, callback) {
   makeRequest(path, user, pass, returnObjectFromJSON(callback));
}

var makeRequest = function(path, user, pass, callback){
  var auth = new Buffer(user + ':' + pass).toString('base64');
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

/**
 * Module dependencies.
 */

var assert = require('assert')
  , liberateca = require('../lib/liberateca');

  
module.exports = {
    'Metodo series': function(){
        assert.equal('liberateca.getSeries', liberateca.getSeries('user', 'pass', function(res){}));
    }
};

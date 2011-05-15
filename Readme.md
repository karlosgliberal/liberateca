Node.js Liberateca client
=========================
Liberateca API client for Node.JS
Web: http://liberateca.net/
http://liberateca.net/api/v1/

Changelog
---------
* 2011-05-15 incorporando el acceso a la api https (ahora obligado)
* 2011-05-03 primer commit y prueba de concepto

Description
-----------
First alpha, alpha relsease :)
Cambio en el codigo, para poder implamentar mejor los metodos y añadido el ejemplo de asincrona. 
Ahora solo esta el metodo -> getSeries que devuelve todas las series

Dependencies
------------

### Runtime
* Node 0.4.x+

### Development/Tests
* TODO 

Instalation
-----------
> TODO


Usuage
------
``` js
  var liberateca = require('../lib/liberateca');

  var datos = liberateca.getSeries('user','password', function(resultados){
    console.log(resultados);
  });
```

To-Do
-----
 (<https://github.com/karlosgliberal/liberateca/issues>)

Author
------

* Karlos g liberal (patxangas) (<http://investic.net/>)


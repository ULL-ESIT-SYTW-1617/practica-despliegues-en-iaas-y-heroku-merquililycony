// importar
    var express = require('express');
     
    // instanciar
    var app = express();
    var path = require('path');
    
    var exec = require('child_process').exec; 


   // ruteo
   app.use(express.static(path.join(__dirname,'public')));

   app.get('/', function(request, response) {
     response.send('index');  
   });
     
    // escuchar
   // app.listen(8080);
   app.set('port', process.env.PORT || 8080);

    
app.listen(app.get('port'), function() {
  console.log('Servidor escuchando en el puerto:'+app.get('port'));
});

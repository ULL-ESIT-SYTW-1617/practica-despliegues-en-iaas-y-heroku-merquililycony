// importar
    var express = require('express');
     
    // instanciar
    var app = express();
    var path = require('path');
    
    var exec = require('child_process').exec; 


   // ruteo
   app.use(express.static(path.join(__dirname,'gh-pages')));

   app.get('/', function(request, response) {
     response.send('index');  
   });


app.post('/_book', function(request, response) {
        function puts(error, stdout, stderr) {
           console.log("Salida:"+stdout);
           if(error) console.log("Error:"+error);
         }
   exec('git clone https://github.com/ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-merquililycony.git'); 
   exec("git pull https://github.com/ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-merquililycony.git  master", puts);
   response.redirect('/');
}); 

     
    // escuchar
   // app.listen(8080);
   app.set('port', process.env.PORT || 8080);

    
app.listen(app.get('port'), function() {
  console.log('Servidor escuchando en el puerto:'+app.get('port'));
});

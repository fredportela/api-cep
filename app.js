var express = require('express');
var cepCallback = require('cep-callback');
var app = express();

app.get('/', function(req, res){
    res.send('<html><body>API</body></html>');
});

app.get('/cep/:cep', function(req, res){
    var cep = req.params.cep;
    cepCallback(cep, (err, cepData) => {
        res.send(cepData)
      })
});

app.listen(3000, function() {
    console.log("Servidor rodando com Express");
});


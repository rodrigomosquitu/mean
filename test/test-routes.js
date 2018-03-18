//----------------------------------------------
// Unit test file
// To run tests:
// $ node_modules/.bin/mocha -u exports test/*
//----------------------------------------------
var supertest = require('supertest'),
app = require('../app');

//----------------------------------------------
// Testa serviço de cadastro de um novo cálculo de ligação
//----------------------------------------------
exports.add_ligacao__should_work = function(done){
	
	var postData = {
	    "origem" : "011",
	    "destino" : "016",
	    "tempo" : 20,
	    "plano" : "FaleMais 30"
	};
	
	supertest(app)
		.post('/falemais/addligacao')
	    .send(postData)
		.expect(200)
		.end(done);
};

//----------------------------------------------
// Testa serviço que lista todas as ligações em banco 
//----------------------------------------------
exports.list_should_return_ligacoes = function(done){
	
	 supertest(app)
		  .get('/falemais/ligacoes')
		  .expect(200)
		  .expect('Content-Type', /json/)
          .end(function(err, res){
              if (err) { return done(err); }
              done();
          });
};

//----------------------------------------------
//Testa serviço que lista todas as tarifas em banco 
//----------------------------------------------
exports.list_should_return_tarifas = function(done){
	
	 supertest(app)
		  .get('/falemais/tarifas')
		  .expect(200)
		  .expect('Content-Type', /json/)
          .end(function(err, res){
             if (err) { return done(err); }
             done();
         });
};

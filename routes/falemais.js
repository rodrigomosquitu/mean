//----------------------------------------------
// Controle do Express - Serviços REST 
//----------------------------------------------
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Tarifas = require('../models/tarifas.js');
var Ligacoes = require('../models/ligacoes.js');

// ----------------------------------------------
// Lista todas as tarifas cadastradas em banco
// ----------------------------------------------
router.get('/tarifas', function(req, res, next) {

	Tarifas.find(function(err, dados) {
		if (err)
			return next(err);
		res.json(dados);
	});
});

// ----------------------------------------------
// Lista todos os cálculos de ligações realizadas
// ----------------------------------------------
router.get('/ligacoes', function(req, res, next) {

	Ligacoes.Model.find(function(err, dados) {
		if (err)
			return next(err);
		res.json(dados);
	});
});

// ----------------------------------------------
// Permite cadastrar um novo cálculo de ligação
// ----------------------------------------------
router.post('/addligacao', function(req, res, next) {

	console.log('Adicionando ligação : ' + JSON.stringify(req.body));

	var valor_tarifa = null;

	// Identifica a tarifa usada no cálculo (origem + destino)
	Tarifas.findOne({
		'origem' : req.body.origem,
		'destino' : req.body.destino
	}, function(err, person) {
		if (err)
			return handleError(err);

		// Verifica se alguma tarifa foi identificada em banco
		if (person !== null) {
			valor_tarifa = person.tarifa;
		}

		// Retorna todos os dados de uma ligação, calculando os valores de
		// tarifa
		// com o plano Fale Mais e sem o mesmo
		var ligacao_completa = Ligacoes.getLigacaoCompleta(req.body,
				valor_tarifa);

		// Cadastra em banco um novo cálculo de ligação
		Ligacoes.Model.create(ligacao_completa, function(err, post) {
			if (err)
				return next(err);
			res.json(post);
		});
	});
});

module.exports = router;
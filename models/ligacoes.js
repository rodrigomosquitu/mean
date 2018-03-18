//----------------------------------------------
// Modelo de negócios - Ligação
//----------------------------------------------
var mongoose = require('mongoose');
var constants = require("./constants");

//----------------------------------------------
// Schema para o objeto Ligação
//----------------------------------------------
var LigacoesSchema = new mongoose.Schema({
	origem : String,
	destino : String,
	tempo : Number,
	plano : String,
	comFaleMais : String,
	semFaleMais : String
}, {
	versionKey : false
});

//----------------------------------------------
// Define os objetos usados para acessar os dados
// de ligações no banco de dados 
//----------------------------------------------
module.exports = {

	// Collection "ligacoes"
	Model : mongoose.model('ligacoes', LigacoesSchema),

	// Retorna todos os dados de uma ligação, calculando os valores de tarifa 
	// com o plano Fale Mais e sem o mesmo  
	getLigacaoCompleta : function(ligacao, tarifa, callback) {

		// Identifica o tempo do plano em minutos
		var tempoPlano = ligacao.plano.split(" ")[1];

		var comFaleMais = Number(0);
		var semFaleMais = Number(0);

		// Verifica se o tempo da ligação excedeu o do plano
		// caso afirmativo, calcula o valor da ligação
		if (Number(ligacao.tempo) > Number(tempoPlano)) {
			var tempoTotal = (ligacao.tempo - tempoPlano);
			comFaleMais = tempoTotal * tarifa * constants.PERC;
		}

		// Calcula o valor da ligação sem utilização do plano
		semFaleMais = ligacao.tempo * tarifa;

		// Verifica se alguma tarifa válida foi usada e formata o valor da ligação
		ligacao.comFaleMais = ((tarifa != null) ? constants.CURR + comFaleMais.formatMoney(2, ',', '.') : constants.EMPTY);
		ligacao.semFaleMais = ((tarifa != null) ? constants.CURR + semFaleMais.formatMoney(2, ',', '.') : constants.EMPTY);

		return ligacao;
	}
}

//----------------------------------------------
// Formata como moeda o valor de um número 
//----------------------------------------------
Number.prototype.formatMoney = function(c, d, t) {
	var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "."
			: d, t = t == undefined ? "," : t, s = n < 0 ? "-" : "", i = String(parseInt(n = Math
			.abs(Number(n) || 0).toFixed(c))), j = (j = i.length) > 3 ? j % 3
			: 0;
	return s + (j ? i.substr(0, j) + t : "")
			+ i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t)
			+ (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

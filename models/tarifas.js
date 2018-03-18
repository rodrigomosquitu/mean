//----------------------------------------------
// Modelo de negócios - Tarifas
//----------------------------------------------
var mongoose = require('mongoose');

//----------------------------------------------
//Schema para o objeto Tarifa
//----------------------------------------------
var TarifasSchema = new mongoose.Schema({
  origem: String,
  destino: String,
  tarifa: Number
});

//----------------------------------------------
//Define o objeto usado para acessar os dados 
//de Tarifas no banco de dados - Collection "tarifas"
//----------------------------------------------
module.exports = mongoose.model('tarifas', TarifasSchema);

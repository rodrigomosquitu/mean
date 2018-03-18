//----------------------------------------------
// Define as constantes usadas no sistema
//----------------------------------------------
function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

// Percentual do acréscimo à tarifa (minutos excedentes)
define("PERC", 1.10);

// Formato da moeda
define("CURR","$ ");

// Símbolo usado quando a tarifa não é identificada
define("EMPTY","-");

let fila = [];

const limiteAtendimento = 5;

function chegadaCliente (cliente) {

fila.unshift(cliente);

if (fila.length > limiteAtendimento) {

fila.pop();
 }
console.log("Fila atualizada:", fila);
 }
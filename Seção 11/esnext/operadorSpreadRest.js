// O operador "..." rest(juntar)/spread(espalhar).
// O rest pode ser usado com parametro de um função.

//O spread pode ser usado com objeto:
const funcionario = { nome: 'Maria', salario: 12348.99 } // Cria um objeto de forma normal.
const clone = { ativo: true, ...funcionario } // Usa o spread para espalhar os dados do objeto funcionario dentro do outro objeto.
console.log(clone) // O objeto clone não aponta para funcionario, apenas copia os dados.

// Usar spread com array:
const grupoA = ['João',  'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)



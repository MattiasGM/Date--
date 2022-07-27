const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
]

const nomes = pessoas.map(obj => obj.nome)
const idade = pessoas.map(obj => { 
    delete obj.nome
    return obj
})
const idade2 = pessoas.map(obj => ({ idade: obj.idade }))
const id = pessoas.map((obj, indice) => {
    const newObj = { ...obj }
    newObj.id = indice + 1
    return newObj
})

console.log(id)

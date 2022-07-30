/* exercicios JS Array avançado
const map = () => { // exercicio usando obj.map()
    const pessoas = [
        { nome: 'Luiz', idade: 62},
        { nome: 'Maria', idade: 23},
        { nome: 'Eduardo', idade: 55},
        { nome: 'Letícia', idade: 19},
        { nome: 'Rosana', idade: 32},
        { nome: 'Wallace', idade: 47},
    ]
    
    // const nomes = pessoas.map(obj => obj.nome) //recebe função de callback(obj/valor, indice, array)
    // const idade = pessoas.map(obj => { 
    //     delete obj.nome
    //     return obj
    // })
    // const idade2 = pessoas.map(obj => ({ idade: obj.idade }))
    const id = pessoas.map((obj, indice) => {
        const newObj = { ...obj }
        newObj.id = indice++
        return newObj
    })
    
    console.log(id)
}

const reduce = () => { // exercicio usando obj.reduce()
    const numeros = [5, 50, 20, 33, 45, 1, 0, 31, 56, 78, 99, 87]

    const total = numeros.reduce((acumulador, valor, indice, array) => { //somando todos os números (reduce)
        acumulador += valor
        return acumulador
    }, 0//valor inicial do ACUMULADOR//)
    console.log(total)


    // usando filter mas é possivel usar reduce, não é eficiente com reduce
    const pares = numeros.filter(valor => valor % 2 === 0 ?? [...valor]) //Retornando uma array com os números pares (Filter) //using spread operator >(...)<
    console.log(pares)

    //usando map mas é possivel usar reduce, não é eficiente com reduce
    const dobro = numeros.map(valor => valor*2) //Retornando uma array com o dobro dos valores (map)
    console.log(dobro)

    //exercicio com reduce

    const pessoas = [
        { nome: 'Luiz', idade: 62 },
        { nome: 'Maria', idade: 23 },
        { nome: 'Eduardo', idade: 45 },
        { nome: 'Letícia', idade: 10 },
        { nome: 'Rosana', idade: 64 },
        { nome: 'Wallace', idade: 53 },
    ]

    const maisVelha = pessoas.reduce((acumulador, valor) => acumulador.idade > valor.idade ? acumulador : valor)
    console.log(maisVelha)
}

const exFilterMapReduce = () => {
    // Retorne a soma do dobro de todos os pares
    // -> Filtrar os pares (filter)
    // -> Dobrar os valores (map)
    // -> Reduzir (somar tudo) (reduce)

    const numeros = [5, 20, 45, 31, 78, 87]
    
    // Método longo

        const pares = numeros.filter(valor => valor % 2 === 0 ?? valor) // Filtrando os valores pares (filter)

        const dobro = pares.map(valor => valor * 2) // Dobrando os valores pares (map)

        const somaTotal = dobro.reduce((acumulador, valor) => { return acumulador += valor }, 0) // Somando tudo (reduce)

        console.log(pares)
        console.log(dobro)
        console.log(somaTotal)

    //

    // Método curto (melhor) // indentado
    const exercicio = numeros
        .filter(valor => valor % 2 === 0 ?? valor)
        .map(valor => valor * 2)
        .reduce((acumulador, valor) => acumulador += valor)

    console.log(exercicio)
    console.log(numeros)
}

const forEach = () => { // funciona apena em array's e substitui o -> for(let i in [array]){}
    const numeros = [10, 20, 30]

    numeros.forEach(valor => console.log(valor)) // recebe callback's -> valor, indice, array <- //igual .filter e .map // porém, não executa nada, não faz nada, serve para um looping livre com callback
}
*/

/* exercicios JS Objetos e prototypes (avançado)

const property_ies = () => { // usando Object.defineProperty / Object.defineProperties
    class Produto {
        constructor(nome, preco, estoque) {
            
            Object.defineProperty(this, 'nome', {
                enumerable: true, // Mostrar a chave
                value: nome, // Valor
                writable: true, // Pode Alterar
                configurable: false, // configuravel / deletavel etc...
            })

            Object.defineProperties(this, {
                preco: {
                    enumerable: true, // Mostrar a chave
                    value: preco, // Valor
                    writable: true, // Pode Alterar
                    configurable: false, // configuravel / deletavel etc...
                },
                estoque: {
                    enumerable: true, // Mostrar a chave
                    value: estoque, // Valor
                    writable: true, // Pode Alterar
                    configurable: false, // configuravel / deletavel etc...
                }
            })

        }
    }

    const p1 = new Produto('Calça', 95, 4)

    console.log(p1)

}
*/

const property_ies = () => { // usando Getters e Setters na constructor class
    class Produto {
        constructor(nome, preco, estoque) {
            let nomePrivado = nome
            
            Object.defineProperty(this, 'nome', {
                enumerable: true, // Mostrar a chave
                //value: nome, // Valor -> não usa value nos getters e setters
                //writable: true, // Pode Alterar -> não usa writable nos getters e setters
                configurable: false, // configuravel / deletavel etc...
                get: () => nomePrivado,
                set: (valor) => {
                    if(typeof valor !== 'number') {
                        throw new TypeError('MensagemERROR')
                    }

                    nomePrivado = valor
                }
            })

            Object.defineProperties(this, {
                preco: {
                    enumerable: true, // Mostrar a chave
                    value: preco, // Valor
                    writable: true, // Pode Alterar
                    configurable: false, // configuravel / deletavel etc...
                },
                estoque: {
                    enumerable: true, // Mostrar a chave
                    value: estoque, // Valor
                    writable: true, // Pode Alterar
                    configurable: true, // configuravel / deletavel etc...
                }
            })

        }
    }

    const p1 = new Produto('Calça', 95, 8)

    console.log(p1.nome)

}

property_ies()
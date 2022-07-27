//const mainRoot = document.querySelector('main')
//const mainH1 = document.querySelector('main h1')

{
function App1() { // exercicio para montar a data, mes, ano, hora atual e aplicar na tela forma. 1
    let resultsTxt = document.querySelector('main h1')
    resultsTxt.innerHTML = results()

    function results() {
        const data = new Date()

        return `${getDayWeek(data.getDay())}, ${getDayMonth(data.getDate())} de ${getMonth(data.getMonth())} de ${getYear(data.getFullYear())} <br> ${getHour(data.getHours())}:${getMinute(data.getMinutes())}`
    }

    function getDayWeek(day) {
        const daysWeek = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']

        return daysWeek[day]
    }

    function getDayMonth(date) {
        return date
    }

    function getMonth(month) {
        const monthIndex = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

        return monthIndex[month]
    }

    function getYear(year) {
        return year
    }

    function getHour(hour) {
        return hour < 10 ? `0${hour}` : `${hour}`
    }

    function getMinute(minute) {
        return minute < 10 ? `0${minute}` : `${minute}`
    }

}

function App2() { // exercicio para montar a data, mes, ano, hora atual e aplicar na tela forma. 2
    let resultsTxt = document.querySelector('main h1')
    resultsTxt.innerHTML = results()

    function results() {
        const data = new Date()

        return `${getDayWeek(data.getDay())}, ${getDayMonth(data.getDate())} de ${getMonth(data.getMonth())} de ${getYear(data.getFullYear())} <br> ${getHour(data.getHours())}:${getMinute(data.getMinutes())}`
    }

    function getDayWeek(day) {
        switch(day) {
            case 0:
            return 'domingo'

            case 1:
            return 'segunda-feira'

            case 2:
            return 'terça-feira'

            case 3:
            return 'quarta-feira'

            case 4:
            return 'quinta-feira'

            case 5:
            return 'sexta-feira'

            case 6:
            return 'sábado'
        }
    }

    function getDayMonth(date) {
        return date
    }

    function getMonth(month) {
        switch(month) {
            case 0:
            return 'Janeiro'

            case 1:
            return 'Fevereiro'

            case 2:
            return 'Março'

            case 3:
            return 'Abril'

            case 4:
            return 'Maio'

            case 5:
            return 'Junho'

            case 6:
            return 'Julho'

            case 7:
            return 'Agosto'

            case 8:
            return 'Setembro'

            case 9:
            return 'Outubro'

            case 10:
            return 'Novembro'

            case 11:
            return 'Dezembro'
        }
    }

    function getYear(year) {
        return year
    }

    function getHour(hour) {
        return hour < 10 ? `0${hour}` : `${hour}`
    }

    function getMinute(minute) {
        return minute < 10 ? `0${minute}` : `${minute}`
    }

}

function App3() { // exercicio para montar a data, mes, ano, hora atual e aplicar na tela forma. 3
    let resultsTxt = document.querySelector('main h1')
    const data = new Date()

    resultsTxt.innerHTML = Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'short' }).format(new Date())

    resultsTxt.innerHTML += `<br> ${data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' })}`
}

function App4() { // exercicio para montar um gerador de html e textos com for(let x in array/object)
    let resultsTxt = document.querySelector('main h1')
    const elements = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'},
    ]

    for(let cont in elements) {
        let { tag, texto } = elements[cont]
        resultsTxt.innerHTML += `<${tag}> ${texto} </${tag}>`
    }
    
}

function App5() { //exercicio para montar um comparador de divisao e retornar os restos

    let resultsTxt = document.querySelector('main h1')
    
    let comparador1 = 3, comparador2 = 5, max = 100

    const FizzBuzz = (num, comp1, comp2) => Fizz(num, comp1) && Buzz(num, comp2)
    const Fizz = (num, comp1) => num % comp1 === 0
    const Buzz = (num, comp2) => num % comp2 === 0

    for(let i = 0; i <= max; i++) {
        if(typeof i !== 'number') console.log(i)
        else if(FizzBuzz(i, comparador1, comparador2)) console.log(i, 'FizzBuzz')
        else if(Fizz(i, comparador1)) console.log(i, 'Fizz')
        else if(Buzz(i, comparador2)) console.log(i, 'Buzz')
        else console.log(i)
    }

}

const timer = () => { // exercicio, criando um timer no navegador com função de iniciar/ stop e zerar

    let hourIndex = 0,  minuteIndex = 0, secondIndex = 0, hour = 0, minute = 0, second = 0, timerOn, start = false

    let panelCreat = document.createElement('div')
    Object.assign(panelCreat, { className: 'panel' })

    let divButtons = document.createElement('div')
    divButtons.setAttribute('class', 'divButtons')

    let btnStart = document.createElement('input')
    Object.assign(btnStart, {
        id: 'btnStart',
        className: 'button',
        type: 'button',
        value: 'Start',
    })

    let btnStop = document.createElement('input')
    Object.assign(btnStop, {
        id: 'btnStop',
        className: 'button',
        type: 'button',
        value: 'Stop',
    })

    let btnClean = document.createElement('input')
    Object.assign(btnClean, {
        id: 'btnClean',
        className: 'button',
        type: 'button',
        value: 'Clean',
    })

    let main = document.querySelector('main')
    main.appendChild(panelCreat)
    main.appendChild(divButtons)
    divButtons.appendChild(btnStart)
    divButtons.appendChild(btnStop)
    divButtons.appendChild(btnClean)

    let h1 = document.querySelector('main h1') 
    let panel = document.querySelector('main .panel')

    h1.innerHTML = 'Meu Timer'
    panel.innerHTML = `00:00:00`

    document.addEventListener('click', (e) => {
        const elements = e.target
        let id = elements.id

        if(id === 'btnStart') {
            if(!start){
                start = true
                timerOn = setInterval(timerStart, 1000)
                panel.style.color = 'black'
            }
        }
        if(id === 'btnStop') {
            start = false
            panel.style.color = 'red'
            timerStop()
        }
        if(id === 'btnClean') {
            start = false
            hourIndex = 0, minuteIndex = 0, secondIndex = 0
            panel.innerHTML = `00:00:00`
            panel.style.color = 'black'
            timerStop()
        }
    })

    function timerStop() {
        start = false
        clearInterval(timerOn)
    }

    function timerStart() {
        secondIndex++

        if(secondIndex >= 60) secondIndex = 0, minuteIndex++
        if(minute >= 60) minuteIndex = 0, hourIndex++
        if(hour >= 24) hourIndex = 0, timerStop()

        if(hourIndex < 10) hour = `0${hourIndex}`
        else hour = hourIndex
        if(minuteIndex < 10) minute = `0${minuteIndex}`
        else minute = minuteIndex
        if(secondIndex < 10) second = `0${secondIndex}`
        else second = secondIndex

        return panel.innerHTML = `${hour}:${minute}:${second}`
    }

}

const listaDeTarefa = () => { // exercicio, criando lista de tarefa e salvando em cache do navegador

    const listTask = [] // lista de todas as tarefas são salvas aqui

    let ulTarefas = null
    let div = null

    function creatDiv(id, className) {
        let creatDiv = document.createElement('div')
        Object.assign(creatDiv, {
            id: id,
            className: className
        })
        return creatDiv
    }

    function creatInput(type, id, className, value, placeholder) { // função fabrica de Inputs
        let creatInput = document.createElement('input')
        Object.assign(creatInput, {
            type: type,
            id: id,
            className: className,
            value: value,
            placeholder: placeholder,
        })
        return creatInput
    }

    function creatUl(id, className) { // cria a pagina de Lista UL
        let creatUl = document.createElement('ul')
        Object.assign(creatUl, {
            id: id,
            className: className
        })

        return creatUl
    }

    function creatLi(value) { // cria a lista da tarefa e o botão de Remover junto
        let delBtn = creatInput('button', 'delBtn', 'delBtn', 'Remove')
        let creatList = document.createElement('li')
        creatList.setAttribute('id', 'tarefa')
        creatList.innerText = value

        creatList.appendChild(delBtn)
        ulTarefas.appendChild(creatList)

        return creatList
    }

    function elementAppendChild(element, functionIn, ...atributs) { // função fabrica para adicionar elementos e atributos
        return element.appendChild(functionIn(...atributs))
    }

    function panelClear(tarefa) { // função para limpar o painel sempre que enviar uma nova tarefa
        tarefa.value = ''
        tarefa.focus()
    }

    function app() { // função root da aplicação
        mainH1.innerHTML = 'Lista de Tarefa'

        elementAppendChild(mainRoot, creatDiv, 'divPanel', 'divPanel')
        div = document.querySelector('#divPanel')

        elementAppendChild(div, creatInput, 'text', 'listTxtInput', 'panel', '', 'digite aqui sua tarefa') // criando a barra de texto input para adicionar tarefas a lista

        elementAppendChild(div, creatInput, 'button', 'btnSendInput', 'button', 'Send') // criando o botão de enviar/ send para a lista

        elementAppendChild(mainRoot, creatUl, 'ulTarefas', 'ulTarefas')

        ulTarefas = document.querySelector('#ulTarefas')
        listTxtInput.addEventListener('keypress', (e) => { // enviar com o botão ENTER
            if(e.keyCode === 13) {
                let tarefa = document.querySelector('#listTxtInput')
                if(!tarefa.value) return alert('[ERROR] Por favor, preencha os campos')
                listSave(listTask, tarefa.value)
                creatLi(listTask.slice(listTask.length -1))
                panelClear(tarefa)
            }
        })

        recoveryListSave()
    }

    function listSave(lT, task) {
        if(task) lT.push(task)
        const listTaskJSON = JSON.stringify(lT)
        localStorage.setItem('task', listTaskJSON)
    }

    function recoveryListSave() {
        const tasks = localStorage.getItem('task')
        const tasksList = JSON.parse(tasks)


        for(let task of tasksList) {
            listTask.push(task)
            creatLi(task)
        }
    }

    document.addEventListener('click', (e) => { // Eventos de click por id e atribuição de funções aos mesmos
        const elements = e.target
        const idElement = elements.id
        const classElement = elements.className

        let tarefa = document.querySelector('#listTxtInput')

        if(idElement === 'btnSendInput') { // Evento de enviar a tarefa para a lista
            if(!tarefa.value) return alert('[ERROR] Por favor, preencha os campos')
            listSave(listTask, tarefa.value)
            creatLi(listTask.slice(listTask.length -1))
            panelClear(tarefa)
        }
        if(idElement === 'tarefa') { // Evento para checar a tarefa ou desmarcar checagem
            return classElement === '' ? elements.className = 'checkedTrue' : elements.className = ''
        }
        if(idElement === 'delBtn') { // Evento de deletar a tarefa clicando no botão REMOVER
            // console.log(elements.parentElement)
            // console.log(listTask)
            elements.parentElement.remove()
            listTask.splice(listTask.indexOf(elements.parentElement.textContent), 1)
            listSave(listTask)
            // console.log(listTask)
        }
    })

    console.log(mainRoot)
    app()
}

const test1 = () => { // Processo de raspagem de um site, extraindo todos os subtitles da página (h2)
    {    
        let subTitlesNodeList = document.querySelectorAll('h2')
        let subTitlesFormatArrayString = []
        for(let index in subTitlesNodeList) { 
            subTitlesFormatArrayString.push(subTitlesNodeList[index].innerText) 
        }
        console.log(subTitlesFormatArrayString)
    }    
}

const calculadora = () => { // Calculadora com function constructor (class constructor using ES6+)

    class Calculadora {
        constructor() {
            this.display = () => document.querySelector('#panel')
            this.app = () => {
                this.creatCalculater()
                this.captureCliques(this.display())
            }

            this.captureCliques = (dis) => {
                document.addEventListener('click', e => {
                    const el = e.target
                    if(el.classList.contains('buttonCalc')) {
                        if(el.innerHTML === '=') return this.equal(dis)
                        if(el.innerHTML === 'C') return this.clear(dis)
                        if(el.innerHTML === '«') return this.dell(dis)
                        this.addDisplay(dis, el)
                    }
                })
            }

            this.equal = dis => {
                try {
                    return dis.innerHTML ? dis.innerHTML = eval(dis.innerHTML) : ''
                } catch(err) {
                    dis.innerHTML = ''
                    return alert('[ERRO] conta inválida')
                }
            }

            this.clear = dis => dis.innerHTML = ''

            this.dell = dis => dis.innerHTML = dis.innerHTML.slice(0, -1)

            this.addDisplay = (dis, el) => {
                dis.innerHTML += el.innerHTML
                document.querySelector('#equal').focus()
            }

            this.creatCalculater = () => {
                mainH1.innerHTML = 'Calculadora'
                this.panel()
                this.keyboard()
            }

            this.panel = () => {
                let panel = this.create('div', 'panel', 'panel')
                mainRoot.appendChild(panel)
            }

            this.keyboard = () => {
                let table = this.create('table', 'keyboard', 'keyboard')
                let tbody = this.create('tbody')
                this.keyboardConstruct(4, 'tr', 'td', tbody, 'button')

                table.appendChild(tbody)
                mainRoot.appendChild(table)
            }

            this.keyboardConstruct = (indexY, elementX, elementY, append, btn) => { // teclado da calculadora
                let keys = ['C', 7, 4, 1, '.', '(', 8, 5, 2, 0, ')', 9, 6, 3, '«', '/', '*', '+', '-', '=']
                let input = ''
                let eixoY = indexY
                let td

                for(let i in keys) {
                    if(i === '0' || i === String(indexY)) {
                        td = this.create(elementY, '','tdCalc')
                        append.appendChild(td)
                        if(i != 0) {indexY += eixoY+1} else indexY++
                    }
                    let tr = this.create(elementX, '', 'trCalc')
                    if(keys[i] === '=') {
                        input = this.create(btn, 'equal', 'buttonCalc', '', 'button')
                    } else input = this.create(btn, '', 'buttonCalc', '', 'button')
                    input.innerHTML = keys[i]
                    td.appendChild(tr)
                    tr.appendChild(input)
                }
            }

            this.create = (element, id = '', className = '', value = '', type = '') => { // criador de elementos
                return Object.assign(document.createElement(element), {
                        id: id,
                        className: className,
                        value: value,
                        type: type,
                    })
            }
        }
    }

    const calculadora = new Calculadora()
    calculadora.app()
}

}

//reduce()


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

timer()

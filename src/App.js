function App() {
    let data = new Date()

    let resultsTxt = document.querySelector('main h1')
    resultsTxt.innerHTML = results()

    function results() {
        return `${getDayWeek(data.getDay())}, ${getDayMonth(data.getDate())} de ${getMonth(data.getMonth())} de ${getYear(data.getFullYear())} <br> ${getHour(data.getHours(), data.getMinutes())}`
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

    function getHour(hour, minute) {
        return minute < 10 ? `${hour}:0${minute}` : `${hour}:${minute}`
    }

}

App()

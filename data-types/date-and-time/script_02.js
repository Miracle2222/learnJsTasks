function getWeaakDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']

    return days[date.getDay()]
}

let date = new Date(2014, 0, 3)

console.log(getWeaakDay(date))
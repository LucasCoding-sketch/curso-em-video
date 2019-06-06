var now = new Date()

var weekDay = now.getDay()

var textWeekDay = ''

switch (weekDay) {
    case 0:
        textWeekDay = 'Sunday'
        break
    case 1:
        textWeekDay = 'Monday'
        break
    case 2:
        textWeekDay = 'Thusday'
        break
    case 3:
        textWeekDay = 'Wednesday'
        break
    case 4:
        textWeekDay = 'Thursday'
        break
    case 5:
        textWeekDay = 'Friday'
        break
    case 6:
        textWeekDay = 'Saturday'
        break
    default:
        textWeekDay = 'invalid day'
        break
}

console.log(textWeekDay)
module.exports = { 
    age: function(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || 
            month == 0 &&
            today.getDate() <= birthDate.getDate() ) {
                age = age - 1
            }
            
        return age
    },
    date: function(timestamp){
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            birthDay: `${month}-${day}`,
            iso: `${year}-${month}-${day}`,
            format: `${month}-${day}-${year}`
        }
    },
    grade: function (value) {
        switch(value) {
            case '': return "-- Select --"
            case '5': return "5th Grade"
            case '6': return "6th Grade"
            case '7': return "7th Grade"
            case '8': return "8th Grade"
            case '9': return "9th Grade"
            case '10': return "10th Grade"
            case '11': return "11th Grade"
            case '12': return "12th Grade"
       }
    }
}
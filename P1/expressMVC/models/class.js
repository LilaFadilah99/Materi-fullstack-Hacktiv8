class Chef {
    constructor(id, fullName, birthDate, gender, city) {
        this.id = id
        this.fullName = fullName
        this.birthDate = birthDate
        this.gender = gender
        this.city = city
    }

    get formatBirthDate() {
        let date = new Date(this.birthDate);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('id-ID', options)
    }

    get getAlias() {
        if (this.gender === "Male") {
            return `Mr. ${this.fullName}`
        } else {
            return `Mrs. ${this.fullName}`
        }
    }
}

class ChefDetailDuration {
    constructor(id, fullName, birthDate, gender, city, averageDuration, minDuration, maxDuration) {
        this.id = id
        this.fullName = fullName
        this.birthDate = birthDate
        this.gender = gender
        this.city = city
        this.averageDuration = averageDuration
        this.minDuration = minDuration
        this.maxDuration = maxDuration
    }
}

class Recipe {
    constructor(id, name, duration, category, totalVote) {
        this.id = id
        this.name = name
        this.duration = duration
        this.category = category
        this.totalVote = totalVote
    }
}

class RecipeDetail {
    constructor(id, name, duration, category, createdDate, notes, imageUrl, totalVote, ChefId, chefName) {
        this.id = id
        this.name = name
        this.duration = duration
        this.category = category
        this.createdDate = createdDate
        this.notes = notes
        this.imageUrl = imageUrl
        this.totalVote = totalVote
        this.ChefId = ChefId
        this.chefName = chefName
    }

    get formatDateValue(){
        let date = new Date(this.createdDate)
        date = date.toISOString().split('T')[0]
        return date
    }
}

module.exports = {
    Chef,
    ChefDetailDuration,
    Recipe,
    RecipeDetail
}

// create button

button = document.getElementById('test-btn');

// make class

class Person {
    constructor(name, age, hobbies) {
        this.name = name
        this.age = age
        this.hobbies = hobbies
    }


    introduce() {
        console.log(`Hi my name is ${this.name}`)
    }

    birthday() {
        this.age += 1
        console.log(this.age)
    }

    addHobby(hobby) {
        this.hobbies.push(hobby)
    }

    listHobbies() {
        // loop here

        for (let i = 0; i < this.hobbies.length; i++)
            console.log(this.hobbies[i])
    }

    handleClick(){
        console.log(this)
    }
}

let cody = new Person('Cody', 10, [])

cody.introduce()

cody.birthday()

cody.addHobby('photography')
cody.addHobby('cooking')
cody.listHobbies()

button.addEventListener('click', cody.handleClick())

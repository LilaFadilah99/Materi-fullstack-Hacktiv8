let people = [
    {
        name : "Jihan",
        gender : "Female",
        age : 22
    },   
    {
        name : "Dila",
        gender : "Female",
        age : 22
    },
    {
        name : "Aunun",
        gender : "Male",
        age : 23
    }
]


// people adalh sebuah array, 
// 0 1 2

for(let i = 0; i < people.length; i++){
    let person = people[i]
    let name = person.name
    console.log(`Nama saya ${name} dan saya berusia ${person.age}`);
}

// Nama saya Jihan dan saya berusia 22 tahun
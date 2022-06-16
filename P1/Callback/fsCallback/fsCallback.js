const fs = require('fs')

/*
SYNC
=======
Proses selanjutnya bisa diletakan dibawah secara berurutan.
fs.readFileSync
fs.writeFileSync
*/ 
let data = fs.readFileSync('./fsCallback/data.json', 'utf-8') // string
data = JSON.parse(data)

let newAgent = {
    id: 5,
    name: 'Hendri',
    codeName: 'Axl',
    gender: 'Male',
    age: 23
}
data.push(newAgent)

console.log(data); // terupdate
fs.writeFileSync('./fsCallback/data.json', JSON.stringify(data, null, 4))
/*
ASYNC 
======= 
Proses selanjut nya hanya bisa dilakukan didalam callback.
Callback pada readFile menerima 2 parameter (err, data)
Callback pada writeFile menerima 1 paramter (err)
fs.readFile
fs.writeFile
*/

fs.readFile('./fsCallback/data.json', 'utf-8', (err, data) => {
    if(err){ // truthy // object
        console.log(err);
    }else{
        data = JSON.parse(data)
        let newAgent = {
            id: 6,
            name: 'Jihan',
            codeName: 'Anya',
            gender: 'Female',
            age: 20
        }
        data.push(newAgent)
        console.log(data);


        // Prose save data baru menggunakan write file
        fs.writeFile('./fsCallback/data.json', JSON.stringify(data, null, 4), (err) => {
            if(err){
                console.log(err);
            }else{
                console.log("Save data berhasil");
            }
        })
    }
})// async

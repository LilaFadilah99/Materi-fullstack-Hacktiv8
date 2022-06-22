const fs = require('fs')
const {FactoryBank, Customer} = require('./class');

class Model {
  static saveJSON(data, cb){
    fs.writeFile('./data.json', JSON.stringify(data, null, 4), (err) => {
      if(err){
        cb(err)
      }else{
        cb(null)
      }
    })
  }

  static readBank(cb){
    // console.log(cb);
    fs.readFile('./data.json', 'utf-8', (err, data) => {
      if(err){
        cb(err, null)
      }else{
        // ini cara pake .map
        let banks = JSON.parse(data)
        banks = banks.map(({id, name, type, customers}) => {
          // bisa buat instance customer disini
          customers = customers.map(({name, ktp, deposit}) => { // PROSES INSTANTIATE SEMUA CUSTOMER
            return new Customer(name, ktp, deposit)
          })
          // console.log(customers);
          return FactoryBank.createBank(id, name, type, customers)
        })
        // console.log(banks);
        cb(null, banks)

        // Ini cara manual tanpa built - in function
        // let newBanks = []
        // for(let bank of banks){
        //   let {id, name, type, customers} = bank
        //   let newCustomers = []
        //   for(let customer of customers){
        //     let {name, ktp, deposit} = customer
        //     let instanceCustomer = new Customer(name, ktp, deposit)
        //     newCustomers.push(instanceCustomer)
        //   }

        //   let instanceBank = FactoryBank.createBank(id, name, type, newCustomers)
        //   newBanks.push(instanceBank)
        // }
        // console.log(newBanks);
      }
    })
  }

}

module.exports = Model
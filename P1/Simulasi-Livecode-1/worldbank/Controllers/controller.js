const { FactoryBank } = require('../Models/class')
const Model = require('../Models/model')
const View = require('../Views/view')

class Controller {
  static list(){
    Model.readBank((err, data) => {
      if(err){
        View.showErr(err)
      }else{
        View.read(data)
      }
    })
  }

  static addBank(name, type){ // CREATE
    Model.readBank((err, data) => { // BACA <======
      if(err){
        View.showErr(err)
      }else{
        // LOGIC <======
        let newId = 1
        if(data.length){
          newId = data[data.length - 1].id + 1
        }

        let newBank = FactoryBank.createBank(newId, name, type, [])
        data.push(newBank)
        // AKHIR LOGIC <======

        Model.saveJSON(data, (err) => {
          if(err){
            View.showErr(err)
          }else{
            View.successAddBank(newBank)
          }
        })

      }
    })
  }

  static deleteBank(id){
    Model.readBank((err, data) => { // BACA <======
      if(err){
        View.showErr(err)
      }else{
        // LOGIC <======
        let deletedBank = data.filter((el) => { return el.id === id})[0] // arr[0] // mencari data bank yang mau dihapus

        if(deletedBank){ // Validasi apakah data bank yang dihapus ditemukan

          let newData = data.filter((el) => { return el.id !== id}) // arr // membuat data baru yang mau disimpan
          Model.saveJSON(newData, (err) => {
            if(err){
              View.showErr(err)
            }else{
              View.successDeleteBank(deletedBank)
            }
          })

        }else{
          View.bankNotFound(id)
        }
        // AKHIR LOGIC <====
      }
    })
  }

  /*
  // CONTOH ALGORITMA YANG BISA DIGUNAKAN DI PENAMBAHAN CUSTOMER / RELEASE 4
  1. Baca bank nya dulu
  2. Cari bank yang bersangkutan, (bisa memanfaatkan sifat pass by reference)
  3. saat ketemu(apakah bank yang bersangkutan sudah kena limit ?) 
    3.a. jika sudah, maka akan tampil pesan error
    3.b. jika belum, maka customer baru akan kita proses.
  */ 

  //  Untuk release selanjut nya, teman - teman coba kembangkan sendiri menggunakan algoritma masing - masing.

  /*
  Kisi - kisi Livecode 1
  ===STRUKTUR===
  Modeling (OOP)
  MVC + Callback + Async

  ===LOGIC=== 
  Create
  Delete
  Validasi
  */

}

module.exports = Controller
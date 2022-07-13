# ORM Sequelize
***Notes: Open in Preview Mode for better read experience***

## Sequelize Intro
### Apa itu ORM ?
- ORM (Object Relation Mapping) <br>
    => memetakan sebuah struktur table dan isi table dari sebuah database ke object model <br>
    => Menjadi jembatan antara aplikasi kita yang berbasis OOP dengan Database <br>

### Mengapa butuh ORM ?
- memudahkan kita berinteraksi dengan database
- pembuatan query dan pengembalian data dari database memiliki standar
- perubahan data dan seed lebih terstruktur
- developer bisa lebih berfokus ke logic dalam app

### Apa itu sequelize ?
- Sequelize <br>
    => ORM berbasis `Promise` untuk Node.js <br>
    => mendukung banyak database, termasuk `postgres` <br>
    => Memiliki Banyak fitur <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -   Solid Transaction Support <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -   Relation <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -   Eager and Lazy Loading <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -   Etc <br>


### Setup Dasar Sequelize (Konfigurasi)
- npm init -y
- npm install --save pg
- npm install --save sequelize
- npm install --save-dev sequelize-cli ( install global -> `npm install -g sequelize-cli` )
- Buat gitignore (untuk menghalangi node_modules terpush) <br>
<br>
- quick way => <code> npm init -y; npm i --save pg sequelize; npm i --save-dev sequelize-cli </code>

*Notes: Jika menginstall sequelize-cli secara global, ganti penggunaan `npx sequelize-cli` menjadi `sequelize`* 
<br><br>

### Sequelize Init
- membuat kerangka dasar untuk project kita yang menggunakan sequelize <br>
    &nbsp;&nbsp; => dengan command `npx sequelize-cli init`<br>
    &nbsp;&nbsp; => akan menambahkan folder migration, model, seeders, dan config <br>

-   config <br>
    &nbsp;&nbsp; => pengaturan dasar untuk koneksi dengan database <br>
    &nbsp;&nbsp; => file config akan berisi object dengan 3 property, development(tahap develop), test(testing) dan production(deployed) <br>
    &nbsp;&nbsp; => setelah mengubah konfigurasi bisa jalankan ` npx sequelize-cli db:create ` untuk membuat database <br>
```js
"development": {
    "username": "postgres", // => username untuk database
    "password": "postgres", // => password username tersebut
    "database": "sequelize_intro", // => nama database
    "host": "127.0.0.1", // => host (127.0.0.1 === localhost)
    "dialect": "postgres", // => database yang dipakai
    "port": 5432 // => port yang digunakan oleh database
}
```

-   migrations <br>
    - akan mencatat setiap perubahan yang kita lakukan terhadap database <br>
    - memiliki status up (jika sudah melakukan perubahan) dan down (jika perubahan belum dilakukan) <br>
    - untuk membuat migration baru bisa menggunakan ` npx sequelize-cli migration:generate --name nama_migration ` maka akan menambahkan file migration baru <br>
    
-   models <br>
    - akan mencatat setiap data model yang mempresentasikan setiap table <br>
    - penamaan model berupa `Singular` sedangkan table `Plural` <br>
    - untuk membuat model baru bisa menggunakan ` npx sequelize-cli model:generate --name 'nama_model' --attributes column:tipe,column2:tipe,column3:tipe ` <br>
    - setelah dijalankan maka akan membuat 1 file migration sebagai catatan kita menambahkan table baru dan 1 file pada folder model sebagai representasi table nya (menggunakan konsep OOP) <br>
    
-   seeders <br>
    - akan mencatat setiap data seed yang akan kita pakai untuk mengisi table <br>
    - untuk membuat seed baru bisa menggunakan ` npx sequelize-cli seed:generate --name nama_seed ` <br>
    - setelah dijalankan maka akan membuat 1 file pada folder seeders sebagai catatan kita menambahkan data melalui seeder <br>
    - jangan lupa sebelum data diinput, tambahkan attribute createdAt dan updatedAt karena table kita memiliki timestamp(catatan perubahan data) <br>

_dokumentasi => "https://sequelize.org/v6/"_
<hr>

## Association in Sequelize

### Case

- 1 Patient memiliki 1 Profile
- 1 Patient Memiliki Banyak MedicalRecords
- 1 Patient dihandle Banyak Doctor
- 1 Doctor bisa menghandle Banyak Patient

Maka relasi yang terbentuk akan seperti berikut :
- Patients - `one-to-one` - Profiles
- Patients - `one-to-many` - MedicalRecords
- Patients - `many-to-many` - Doctors [ melalui MedicalRecords ]

Dengan demikian, kita juga harus memberi tahu pada sequelize jika setiap table tersebut terhubung, ada 2 hal yang perlu kita lakukan

1. Membuat column ForeignKey pada Table <br>
kita ambil 1 contoh Patients dengan Profiles, Table Profiles akan menyimpan FK milik Table Patients, maka kita akan membuat sebuah migrasi baru untuk menambahkan column pada Table Profiles, lalu kita definisikan juga bahwa column tersebut merupakan referensi dari table lain

```js
`use strict`

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Profiles', 'PatientId', {
      type: Sequelize.INTEGER,
      references: { // sebagai tanda bahwa column ini merupakan referensi table lain
        model: "Patients", // diisi dengan nama table asal
        key: "id" // column yang dituju
      }
      // disini kita bisa nambahin key baru untuk constrant juga ya seperti onDelete dan onUpdate
    })
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Profiles', 'PatientId')
  }
};
// lakukan juga hal ini pada table lain nya.
```

2. Mendifinisikan asosiasi pada Class Model <br>
sequelize mendukung tipe assosiasi one-to-one, one-to-many dan many-to-many. <br> Kita bisa mendefinisikan asosiasi antar table/model kita dengan 4 buah keyword :
    - hasOne => memiliki satu
    - hasMany => memiliki banyak 
    - belongsTo => dimiliki oleh satu
    - belongsToMany => dimiliki oleh banyak

    Bagaimana cara kita memberi tau sequelize ? <br>
mudah saja, kita hanya perlu mendefinisikannya di dalam static associate di setiap model kita
```js
// 1. pada Model Profile
class Profile extends Model {
    static associate(models) {
        // define association here
        // Model.[assosiation](models.[TargetModel], {foreignKey: `[FK_Column]`})
        Profile.belongsTo(models.Patient, {foreignKey: "PatientId"})
        // Model profile, dimiliki oleh satu (model patient, {melalui column PatientId})
    }
}

// 2. Pada model Patient
class Patient extends Model {
    static associate(models) {
        // define association here
        Patient.hasOne(models.Profile, {foreignKey: "PatientId"})
    }
}
```
Setelah kita melakukan hal tersebut, kita bisa memanfaatkan fitur eager loading yang sudah didukung oleh sequelize...

Apa itu eager loading ? <br>
eager loading merupakan fitur dimana kita bisa mengambil data dari table berbeda hanya dengan 1 kali query/pemanggilan

lalu bagaimana cara menggunakan nya ? <br> 
mudah saja, kita bisa menggunakan option include pada saat kita menjalankan method find kita
```js
// selengkapnya silahkan baca dokumentasi sequelize mengenai findAll
Patient.findAll({
    include: ["Profile"] // didalam array nya bisa kita isi dengan Model yang ingin kita bawa/ambil sekaligus
})
```
dengan demikian kita akan menerima data Patient yang mana di setiap datanya akan diikut sertakan data profile mereka 😃.

Notes : Untuk penggunaan assosiasi many-to-many, kita mengguanakan keyword belongsToMany pada kedua Model nya dan jangan lupa, pada bagian option di argumen kedua harus kita isi dengan `{through: "ClassKonjungsinya"}`
```js
    Patient.belongsToMany(models.Doctor, {through: "MedicalRecord"})
```

😁 Selamat Mencoba 😁

<hr>

## Sequelize Hooks and Validation

    
### Hooks
_Sequelize Hooks Doc => https://sequelize.org/master/manual/hooks.html_

=> merupakan lifecycle alur data dari sequelize

=> akan dieksekusi setiap kita menjalankan program `pada bagian tersebut(lifecycle)`.

```
~~~
Hooks (also known as lifecycle events), are functions which are called before and after calls in sequelize are executed. For example, if you want to always set a value on a model before saving it, you can add a beforeUpdate hook.

Note: You can't use hooks with instances. Hooks are used with models.
~~~

terjemahan singkat :
Hooks atau lebih dikenal dengan event alur data, merupakan function yang akan dieksekusi sebelum/sesudah kita mengeksekusi method milik sequelize. seperti ketika menambahkan data baru.
```
Ada 2 hal yang perlu diperhatikan ketika kita ingin menggunakan hooks di Sequelize :
1. Declare, bagaimana cara menuliskan hooks nya
    -   Initiation => langsung pada bagian init model
    ```js
    ModelName.init({
        // Model's Property
    }, {
        hooks: {
            beforeCreate: (instance, options) => {
                // do your stuff here
            }
        },
        sequelize,
        modelName: 'ModelName',
    })
    ```
    -   "addHook()" => ditulis setelah init
    ```js
    // Model.addHook('nama hook', callback)
    ModelName.addHook('beforeValidate', (instance, options) => {
        // do your stuff here
    });

    return ModelName
    ```
    -   Direct Method => ditulis setelah init
    ```js
    // Model.namaHook(callback)
    ModelName.beforeCreate((instance, option) => {
        // also, do your stuff here
    })

    return ModelName
    ```
2.  Behaviour, scope berlakunya hooks tersebut
    -   Global Hook
        => dibuat pada saat instantiate Sequelize di model/index.js
        => bersifat global jadi berlaku pada setiap instance model kita

    -   Instance Hook
        => dibuat pada class model
        => meng-overwrite global hook


### Validation
_Sequelize Validation Doc => https://sequelize.org/master/manual/validations-and-constraints.html_

=> Menjalankan validasi sebelum melakukan query <br>
=> Validasi ini bersifat `app level`, berbeda dengan constraint yang bersifat `database level` <br>
=> `Constraint` ditulis di dalam `migrations`, `Validation` ditulis di dalam `models` <br>
=> tujuan validation ini agar kita tidak perlu `membayar mahal ketika validasi dilakukan didalam database menggunakan constraint` <br>
=> cara menggunakan `validation` cukup mudah, tambahkan key `validate` pada property model kita, dan berikan tipe data object, lalu tinggal kita isi dengan validasi yang kita inginkan  <br>
=> selain yang sudah disediakan oleh sequelize, kita juga bisa membuat custom validation

```js
User.init({
    first_name:{
      type: DataTypes.STRING,
      validate: {
        minimumLengthIsSeven(value){ // contoh custom validation
          if(value.length < 7){
            throw `First name must have atleast 7 character`
          }
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        contains: 'a' // contoh built-in validation sequelize, dan masih byk lagi
      }
    },
    gender: DataTypes.STRING,
    dob: DataTypes.DATE,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
```

<hr>
<hr>

## ***Notes Tambahan:***

<br>

**1. Masalah Seeding Sequelize / Duplicate id setelah seeding.** <br>
Saat melakukan seeding menggunakan dialeg postgres, sequelize [terkadang] tidak mencatat sequence(serial) dari id terbaru yang ditambahkan melalui seeding
Sehingga sering sekali terjadi error ketika kita ingin melakukan create new data. <br> maka kita bisa menambahkan sebuah query untuk mengubah sequence tersebut berdasarkan id terbesar yang sudah tercatat kedalam database kita menggunakan cara berikut
```js
// bila dilakukan dengan async await
// tambahkan code dibawah ini setelah queryInterface seeding nya
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Users', users, {});
        await queryInterface.sequelize.query(`SELECT setval('"tableName_id_seq"', (SELECT MAX(id) FROM "tableName"))`)
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Users', null);
    }
}
```
&nbsp; penjelasan lebih lanjut => &nbsp;&nbsp;&nbsp;https://www.gitmemory.com/issue/sequelize/sequelize/9295/494106823

**2. OOP Method**,<br> karena sequelize menggunakan konsep OOP, <br> kita bisa menggunakan method juga pada Class Model kita

- Instance Method
        => method yang akan dimiliki oleh setiap instance dari data yang kita panggil
- Class Method
        => Method yang terikat pada model kita

```js
class User extends Model {
    // class/static method
    static getMaleUsers(){
        return User.findAll({
            where: {
                gender: "male"
            }
        })
    }

    // instance method
    get fullName(){
        return `${this.first_name} ${this.last_name}`
    }

    greetings(){
        console.log(`Hello there, my name is ${this.fullName}`);
    }
}
```

**3. Helper Function** <br>
=> Function yang bisa kita pakai sebagai bantuan <br>
=> bisa disimpan secara global menggunakan app.locals sehingga bisa digunakan pada file ejs kita <br>
=> buat sebuah folder bernama `helpers`, setiap function `helper` bisa disimpan dalam folder tersebut. <br>
=> secara umum, 1 file menghandle 1 function [ tergantung kebutuhan ]
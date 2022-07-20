Sequelize Hook => https://sequelize.org/master/manual/hooks.html
    => merupakan lifecycle
    => akan dieksekusi setiap kita menjalankan program `pada bagian tersebut`

    ```~~~
    Hooks (also known as lifecycle events), are functions which are called before and after calls in sequelize are executed. For example, if you want to always set a value on a model before saving it, you can add a beforeUpdate hook.

    Note: You can't use hooks with instances. Hooks are used with models.
    ~~~```

    1. Declare
        -   Initiation
        -   "addHook()"
        -   Direct Method

    2.  Behaviour
        -   Global Hook
            => dibuat pada saat instancetiate Sequelize di model/index.js
            => bersifat global jadi berlaku pada setiap instance model kita

        -   Instance Hook
            => dibuat pada class model
            => meng-overwrite global hook


Method
    - Instance Method
        => method yang akan dimiliki oleh setiap instance dari data yang kita panggil

    - Class Method
        => Method yang terikat pada model kita


Sequelize Validation => https://sequelize.org/master/manual/validations-and-constraints.html
    => Menjalankan validasi sebelum melakukan query
    => Validasi ini bersifat `app level`, berbeda dengan constraint yang bersifat `database level`
    => agar kita tidak perlu `membayar mahal ketika validasi dilakukan didalam database menggunakan constraint`
    => kita bisa membuat custom validation juga


Helper Function
    => Function yang bisa kita pakai sebagai bantuan
    => bisa disimpan secara global menggunakan app.locals




~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Notes Tambahan:
Sequelize,
Saat melakukan seeding menggunakan dialeg postgres, sequelize tidak mencatat sequence(serial) terbaru yang ditambahkan melalui seeding
Sehingga sering sekali terjadi error ketika kita ingin melakukan create new data

maka kita bisa menambahkan sebuah query untuk mengubah sequence tersebut berdasarkan id terbesar yang sudah tercatat kedalam database kita menggunakan query berikut
```js
// bila dilakukan dengan async await
    await queryInterface.sequelize.query(`SELECT setval('"tableName_id_seq"', (SELECT MAX(id) FROM "tableName"))`)
```
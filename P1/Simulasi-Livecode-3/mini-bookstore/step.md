## Release 0
- setup database
1. npm init -y
1. npm i --save pg express ejs
1. npm i --save-d sequelize (optional kalau belum install global)
1. sequelize init
1. edit file config development
1. sequelize db:create (untuk membuat databasae sesuai config)
1. buat model sesuai kebutuhan
1. sequelize model:generate --name (TableName) --attributes (attribute):(type),dst
1. jalankan migration (sequelize db:migrate)
1. jangan lupa cek di database


## Release 1
- setup relation (1 Author - many Book (AuthorId))
1. buat file migration
1. sequelize migration:generate --name (nama_file)
1. tujuan file migration untuk menambahkan column baru (AuthorId di Book)
1. edit file migration (queryInterface.addColumn (up), removeColumn(down))
1. jangan lupa references nya
1. jalankan migration (sequelize db:migrate)
1. jangan lupa cek di database
1. edit file model
1. static associate (Author hasMany, Book belongsTo)
1. model Book init (tambahkan AuthorId type Integer)


## Release 2
- seeding authors
1. lakukan seeding data
1. sequelize seed:generate --name (nama_file)
1. edit file seeding (require json, mapping, up and down)
1. bisa pake raw query untuk update id terakhir (optional)
1. jalankan seeding (sequelize db:seed:all)


## Release 3
- setup express
1. bikin file app.js dan .gitignore
1. buat folder yang dibutuhkan (routes, controllers, views, helpers)
1. edit app.js menggunakan express js
1. edit routes
1. edit controllers (bikin skeleton code)


## Release 4
#### GET /authors
1. edit controller method get authors
1. bikin file ejs di views untuk menampilkan authors
1. component - h1, table
1. dari controller kirim data authors ke ejs list authors

#### GET /books
1. edit controller method utk get books
1. bikin file ejs di views untuk menampilkan books
1. component - h1, table, button (buy, add)
1. dari controller kirim data books ke ejs list books
1. lakukan update untuk stock di controller
1. buat controller untuk get form add


## Release 5
#### GET & POST /books/add
1. bikin file ejs untuk inputan form (get untuk tampilkan form)
1. method post untuk ambil data dari form
1. controller method get (untuk tampilkan form)
1. ambil juga data dari table Author untuk dikirim ke ejs
1. controller method post (untuk create data)
1. redirect ke list books

#### Hooks
1. bikin hooks di model Books
1. hooks beforeCreate
1. format isbn - to lower case, _ untuk spasi

#### Validation
1. bikin validasi di model Books bagian Init
1. notEmpty untuk string validation
1. min atau custom validators untuk integer validation
1. jangan lupa buat message yang deskriptif


## Release 6
1. bikin file ejs untuk menampilkan list books yang stock 0
1. component - h1, table, button restock, button delete
1. optional kalau mau bikin menggunakan reusable component


## Release 7
#### GET  /books/restock/:id
1. bikin controller method get untuk tampilkan form update
1. method get untuk ambil data 1 book include author sesuai id
1. bikin file ejs untuk menampilkan form update
1. component - form, input, label, button (method post, action ke post update)

#### POST  /books/restock/:id
1. bikin controller method post untuk update data book
1. ambil inputan dari form melalui request body
1. ambil inputan id dari request params
1. method update data sesuai inputan
1. redirect ke books


## Release 8
1. bikin controller method destroy untuk hapus data
1. ambil inputan id dari request params
1. method delete sesuai id
1. redirect ke empty book list


## Release 9
1. bikin file di folder helper
1. buat function untuk mengubah format price
1. exports function
1. require helper di app.js untuk jadi global
1. gunakan helper di file ejs yg membutuhkan

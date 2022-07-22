# Mini Bookstore

⏰ Duration: ~60 minutes

Buatlah sebuah website bertema bookstore.

[Link demo](https://stormy-beach-86958.herokuapp.com/)

## Release 0

> Gunakan nama database `bookstore-simulasi-lc`

Buatlah model untuk :

1. Author
  - name: string
  - age: integer
  - gender: string

2. Book
  - title: string
  - isbn: string
  - price: integer
  - stock: integer

## Release 1

Relasi antara `Author` dengan `Book` adalah satu `Author` dapat menulis banyak `Book`, dan satu `Book` hanya bisa ditulis oleh satu `Author`.  
Buatlah migration untuk memenuhi requirements tersebut.

## Release 2

Buatlah seeding untuk menginput `Author`. Datanya adalah: (check authors.json)

| name                | age | gender |
| :-----------------: | :-: | :----- |
| J. K. Rowling       | 54  | Female |
| George R. R. Martin | 71  | Male   |
| Suzanne Collins     | 57  | Female |
| James Dashner       | 47  | Male   |

## Release 3

Buatlah routing berdasarkan tabel berikut :

| Method | Route              | Description                                                                      |
| :----- | :---------         | :------------------------------------------------------------------------------- |
| GET    | /authors           | Menampilkan seluruh author yang ada di database                                  |
| GET    | /books             | Menampilkan seluruh buku yang ada di database yang memiliki stock lebih dari 0   |
| GET    | /books/buy/:id     | Membeli buku dari bookstore dan mengurangi stock dari buku                       |
| GET    | /books/add         | Menampilkan form untuk menambahkan buku                                          |
| POST   | /books/add         | Menambahkan data buku ke database                                                |
| GET    | /books/emptyList   | Menampilkan seluruh buku yang ada di database yang memiliki stock 0              |
| GET    | /books/restock/:id | Menampilkan form untuk merestock buku                                            |
| POST   | /books/restock/:id | Mengupdate jumlah stock buku berdasarkan form restock buku                       |
| GET    | /books/delete/:id  | Menghapus buku dari database                                                     |

## Release 4 Read

#### GET /authors

Untuk route `GET /authors` tampilkan data author yang ada di database dalam bentuk tabel.  
Tabel harus memiliki kolom sebagai berikut:

- No.
- Name
- Age
- Gender
- Jumlah Buku

Jumlah buku adalah jumlah buku yang diterbitkan oleh author yang bersangkutan.

#### GET /books

Untuk route `GET /books` tampilkan data buku yang ada di database dengan kondisi stock dari buku harus lebih dari 0.  
Tabel harus memiliki kolom sebagai berikut:

- No.
- Title
- ISBN
- Stock
- Price
- Author
- Action

Di kolom action, tambahkan button yang mengarahkan ke route `/books/buy/:id` dimana ketika di klik, stock dari buku akan berkurang 1. Setelah proses pengurangan selesai, langsung bawa user ke halaman `/books`.  
Lalu tambahkan juga button atau anchor yang mengarah ke route `GET /books/add` untuk menampilkan form guna menambahkan buku ke database.

## Release 5 Create, Hooks & Validation

#### GET & POST /books/add
Untuk route `GET /books/add` buatlah form untuk menambahkan buku ke database.  
Input yang harus dimiliki di form tersebut adalah sebagai berikut:

- Title: text
- ISBN: text
- Stock: text/number
- Price: text/number
- Author: select option

Untuk input author, harus berupa select option yang pilihannya adalah list author yang ada di database.  
Tambahkan button submit yang akan mengirim data ke route `POST /books/add`.

#### Hooks

> Ketika terjadi _error_, boleh menggunakan `res.send` untuk mengirim _error_ nya.
> yang penting _error message_ nya deskriptif.

Untuk route `POST /books/add` buatlah sebuah hooks untuk memformat ISBN dengan format `title + ISBN`.  
Contoh:

```js
title = 'Payung Kumbuh'
isbn = '123123'

// maka isbn-nya menjadi
isbn = payung_kumbuh123123
```

#### Validation
Setelah membuat hooks, jangan lupa menambahkan validasi not empty untuk setiap property.  
Khusus untuk stock dan price, pastikan input yang dimasukan lebih dari 0.  
Buatlah _custom message_ untuk setiap validasi agar pesan _error_ lebih mudah dipahami dan lebih deskriptif.  
Setelah data berhasil ditambahkan ke database, arahkan user ke halaman `/books`.

## Release 6 Empty Book

Untuk route `GET /books/emptyList` tampilkan data seluruh buku yang memiliki stock 0.  
Tabel harus memiliki kolom sebagai berikut:

- No.
- Title
- ISBN
- Price
- Author
- Action

Didalam kolom action buatlah dua button untuk mengarahkan user ke `/books/restock/:id` dan `/books/delete/:id`.

## Release 7 Update

#### GET  /books/restock/:id
Untuk route `GET /books/restock/:id` buatlah form untuk mengupdate stock dari buku.  
Input yang harus dimiliki di form tersebut adalah sebagai berikut:

- Stock: text/number

Tambahkan button update yang akan mengirim data ke route `POST /books/restock/:id`.

#### POST  /books/restock/:id

Pada route `POST /books/restock/:id` update stock buku berdasarkan input dari form.  
Setelah sukses mengupdate stock buku, arahkan user ke halaman `/books/emptyList`.

## Release 8 Delete

Untuk route `GET /books/delete/:id` hapus buku dari database.  
Setelah proses menghapus buku selesai, arahkan user ke halaman `/books/emptyList`.

## Release 9 Helper

Buatlah sebuah helper untuk mengubah format price pada buku kedalam bentuk nominal rupiah.  
Contoh:

- `155000` menjadi `Rp. 155.000,00`

Terapkah helper tersebut ketika menampilkan price dari buku.


## Release 10 Search 

Pada simulasi ini tidak ada search, namun nanti LC ada.

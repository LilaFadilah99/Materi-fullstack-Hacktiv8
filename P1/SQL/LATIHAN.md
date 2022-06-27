# `Latihan QUERY`
Dengan menggunakan query dan GUI yang sudah teman - teman install, buatlah sebuah database sederhana dan coba manipulasi isi datanya.

<hr>

## `DDL`
1. Buatlah sebuah database dengan nama `Eclipse`
2. Buatlah 2 table, yaitu :
  - `Users` , table tersebut akan digunakan untuk menyimpan data users
  dengan properti / kolom sebagai berikut :
    - `id`, Integer dan auto increment
    - `username`, varchar dan maks 255 character
    - `email`, varchar dan maks 255 character
    - `password`, varchar dan maks 255 character

```sql
CREATE TABLE IF NOT EXISTS "Users" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (255) NOT NULL,
    "email" VARCHAR (255) NOT NULL,
    "password" VARCHAR (255) NOT NULL
);
```
<br>

 - `Posts` , table tersebut akan digunakan untuk menyimpan data postingan daru users
  dengan properti / kolom sebagai berikut :
    - `id`, Integer dan auto increment
    - `title`, varchar dan maks 255 character
    - `like`, integer

```sql
CREATE TABLE IF NOT EXISTS "Posts" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (255) NOT NULL,
    "like" INTEGER NOT NULL,
    "UserId" INTEGER,
    FOREIGN KEY ("UserId")
        REFERENCES "Users"("id")
);
```
<hr>

## `DML`
1. Buatlah sebuah query untuk menambahkan satu data ke table `Users`
```sql
INSERT INTO "Users" ("username", "email", "password")
VALUES ('yanto', 'yanto@gmail.com');
```
2. Buatlah sebuah query untuk menambahkan banyak data ke table `Posts`
```sql
INSERT INTO "Posts" ("title", "like", "UserId")
VALUES 
('liburan', 0, 1),
('makan', 10, 1),
('tidur', 44, 1);
```
3. Buatlah sebuah query untuk mendapatkan semua data dari table `Posts`
```sql
SELECT * FROM "Posts";
```
4. Buatlah sebuah query untuk mendapatkan satu data dari table `Posts` dengan `id` yang spesifik
```sql
SELECT * FROM "Posts"
WHERE "id" = 1;
```
5. Buatlah sebuah query untuk mengupdate satu data dari table `Users` dengan `id` yang spesifik
```sql
UPDATE "Users"
SET "username" = 'yanti'
WHERE "id" = 1;
```
6. Buatlah sebuah query yang menghapus satu data dari table `Posts` dengan `id` yang spesifik
```sql
DELETE FROM "Posts"
WHERE "id" = 1;
```

<hr>

## `DQL`

1. Buatlah sebuah query untuk mengambil data dari table `Post`,dimana jumlah postingan yang diambil harus memiliki like 100 keatas
```sql
SELECT * FROM `Posts`
WHERE "id" >= 100;
```
2. Buatlah sebuah query untuk mengambil data dari table `Users`, dengan mengambil properti `username` dan `email` saja. Lalu ganti properti `username` menjadi `user`.
```sql
SELECT "username" AS "user", "email" FROM "Users";
```
3. Buatlah sebuah query untuk mengambil data dari table `Posts` urutkan data dari total like mulai dari like terkecil dan terbesar dan ambil 2 data pertama saja.
```sql
SELECT * FROM "Posts"
ORDER BY "like" ASC
LIMIT 2;
```
4. Buatlah sebuah query untuk mengambil data dari table `Users` dan `Posts` sesuai dengan referensi FK nya.
```sql
SELECT * FROM "Users" u
INNER JOIN "Posts" p
ON u."id" = p."UserId";
```
5. Buatlah sebuah query untuk mengambil data username dari Table `Users` dan total postingan `Posts`, dimana data yang diambil harus digroup dari username Users, dan dihitung total post yang dimiliki.
```sql
SELECT u."username", COUNT(p."UserId") FROM "Users" u
INNER JOIN "Posts" p
ON u."id" = p."UserId"
GROUP BY u."username";
```
5. Buatlah sebuah query untuk mengambil data username dari Table `Users` dan total like dari semua `Posts`, dimana data yang diambil harus digroup dari username Users, dan dihitung total like dari post yang dimiliki.
```sql
SELECT u."username", SUM(p."like") FROM "Users" u
INNER JOIN "Posts" p
ON u."id" = p."UserId"
GROUP BY u."username";
```
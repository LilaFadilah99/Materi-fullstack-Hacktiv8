# Sequelize Association

### Case
Draw.io
1 Patient memiliki 1 Profile (1 to 1)
  - Profiles punya Foreign Key PatientId (Profiles belongsTo (dimiliki oleh) Patients)
  - Patients hasOne (memiliki satu) Profile

1 Patient Memiliki Banyak MedicalRecords (1 to many)
  - MedicalRecords punya Foreign Key PatientId (MedicalRecords belongsTo Patients)
  - Patients hasMany (memiliki banyak) MedicalRecords

1 Patient dihandle Banyak Doctor

1 Doctor menghandle Banyak Patient

Patient and Doctor (many to many)
  - MedicalRecords adlh penghubung antara Patient dan Doctor
  - MedicalRecords punya Foreign Key PatientId dan DoctorId

ada 2 cara:
- hasMany dan belongsTo
  - Patient hasMany MedicalRecord dihubungkan dengan FK
    - MedicalRecord belongsTo Patient
  - Doctor hasMany MedicalRecord dihubungkan dengan FK
    - MedicalRecord belongsTo Doctor
- belongsToMany
  - Patient belongsToMany Doctor lewat MedicalRecord
  - Doctor belongsToMany Patient lewat MedicalRecord

Tables:
- Patients
- Profiles
- MedicalRecords
- Doctors

### Menambahkan column ForeignKey
ada 3 cara:
1. Belum membuat file migration model -> tambahkan saat cli model:generate
    ```
    npx sequelize-cli model:generate --name 'nama_model' --attributes column:tipe,column2:tipe,column3:tipe,PatientId:int
    ```
1. Sudah membuat file migration tapi belum db:migrate (status masih down) -> tambahkan langsung di file migration
    ```js
    PatientId: {
      type: Sequelize.INTEGER,
      // kita perlu kasih tau sequelize ini adalah ForeignKey
      // kasih tau table references nya kmn dan columnya apa
      references: {
        model: 'Patients',
        key: 'id'
      }
    }
    ```
1. Sudah membuat file migration dan sudah db:migrate (status sudah up) -> buat file migration baru untuk menambahkan field baru
    ```
    - sequelize migration:generate
    - edit migration file untuk menambahkan field ForeignKey
    - PatientId, DoctorId
    - references, model, key
    ```

### Seeding

### Edit Model
- tambahkan column ForeignKey di Model
- PatientId, doctorId
- tambahkan associations di Model
- hasOne, belongsTo, hasMany, belongsToMany
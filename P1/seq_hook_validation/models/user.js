'use strict';
const {
  Model
} = require('sequelize');
const formatDate = require('../helpers/formateDate');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    // contoh penggunaan helper di file js
    greetings() {
      console.log(`Tanggal lahir saya ${formatDate(this.dob)}`)
    }
  }
  User.init({
    first_name: {
      type: DataTypes.STRING,
      validate: {
        // validators bawaan sequelize
        len: {
          args: [2, 10],
          msg: 'Panjang nama depan minimal 2 dan maksimal 10'
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        // custom validators
        isNotHarun(value) {
          if (value === 'harun') throw new Error('Harun tidak boleh masuk');
        }
      }
    },
    gender: DataTypes.STRING,
    dob: DataTypes.DATE,
    email: DataTypes.STRING
  }, {
    // cara 1
    hooks: {
      beforeCreate: (data) => {
        console.log(data, 'before');
        data.first_name = data.first_name.toLowerCase();
        data.last_name = data.last_name.toLowerCase();
        console.log(data, 'after');
      },
      // afterCreate: (user) => {
      //   console.log(`Halo ${user.first_name} ${user.last_name}`);
      // }
    },
    sequelize,
    modelName: 'User',
  });

  // // cara 2
  // User.addHook('beforeCreate', (data) => {
  //   console.log(data, 'before');
  //   data.first_name = data.first_name.toLowerCase();
  //   data.last_name = data.last_name.toLowerCase();
  //   console.log(data, 'after');
  // })

  // // cara 3
  // User.beforeCreate((data) => {
  //   console.log(data, 'before');
  //   data.first_name = data.first_name.toLowerCase();
  //   data.last_name = data.last_name.toLowerCase();
  //   console.log(data, 'after');
  // })

  User.afterCreate((user) => {
    console.log(`Halo ${user.first_name} ${user.last_name}`);
  })

  return User;
};

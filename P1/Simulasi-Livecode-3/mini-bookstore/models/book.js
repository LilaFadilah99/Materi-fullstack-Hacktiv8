'use strict';
const {
  Model
} = require('sequelize');
const formatPrice = require('../helpers/formatPrice');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    get formatPrice(){
      // let price = formatPrice(this.price);
      // return price;
      return formatPrice(this.price);
    }

    static associate(models) {
      // define association here
      Book.belongsTo(models.Author);
    }
  };
  Book.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Input Title tidak boleh kosong'
        }
      }
    },
    isbn: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Input ISBN tidak boleh kosong'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Input Price tidak boleh kosong'
        },
        min: {
          args: 1,
          msg: 'Input Price minimal 1'
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Input Stock tidak boleh kosong'
        },
        min: {
          args: 1,
          msg: 'Input Stock minimal 1'
        }
      }
    },
    AuthorId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Input Author tidak boleh kosong'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (book) => {
        let bookTitle = book.title.toLowerCase().split(' ').join('_');
        book.isbn = `${bookTitle}${book.isbn}`;
      }
    },
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
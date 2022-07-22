const { Op } = require('sequelize');
const { Author, Book } = require('../models');

class Controller{
  static getBooks(req, res){
    Book.findAll({
      where: {
        stock: {
          [Op.gt]: 0
        }
      },
      include: [Author]
    })
    .then(books => res.render('Books', {books}))
    .catch(err => res.send(err))
  }

  static buyBook(req, res){
    // console.log(req.params.id, 'req.params.id buyBook');
    
    // // cara update
    // Book.findByPk(req.params.id)
    // .then(book => {
    //   // console.log(book.stock, 'book findByPk')
    //   return Book.update(
    //     {stock: book.stock - 1},
    //     {
    //       where: {id: book.id},
    //       validate: false
    //     }
    //   )
    // })
    // .then(_ => res.redirect('/books'))
    // .catch(err => res.send(err))

    // cara decrement
    Book.decrement('stock', {
      where: {id: req.params.id}
    })
    .then(_ => res.redirect('/books'))
    .catch(err => res.send(err))
  }

  static formAddBook(req, res){
    Author.findAll({
      attributes: ['id', 'name']
    })
    .then(authors => res.render('Add', {authors}))
    .catch(err => res.send(err))
  }

  static addBook(req, res){
    // console.log(req.body, 'req.body addBook');
    const { title, isbn, stock, price, AuthorId } = req.body;

    Book.create({ title, isbn, stock, price, AuthorId })
    .then(_ => res.redirect('/books'))
    .catch(err => {
      if (err.name === 'SequelizeValidationError') {
        res.render('Error', {errors: err.errors})
      } else {
        res.send(err)
      }
    })
  }

  static emptyBook(req, res){
    Book.findAll({
      where: {
        stock: 0
      },
      include: [Author]
    })
    .then(books => res.render('Empty', {books}))
    .catch(err => res.send(err))
  }

  static formRestockBook(req, res){
    res.render('Restock', {id: req.params.id});
  }

  static restockBook(req, res){
    // console.log(req.params.id, 'req.params.id restockBook');
    // console.log(req.body.stock, 'req.body.stock restockBook');
    Book.update(
      {stock: req.body.stock},
      {where: {id: req.params.id}}
    )
    .then(_ => res.redirect('/books/emptyList'))
    .catch(err => res.send(err))
  }

  static deleteBook(req, res){
    Book.destroy({
      where: {id: req.params.id}
    })
    .then(_ => res.redirect('/books/emptyList'))
    .catch(err => res.send(err))
  }
}

module.exports = Controller;
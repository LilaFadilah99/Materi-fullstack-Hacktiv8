const { Author, Book } = require('../models');

class Controller{
  static getAuthors(req, res){
    Author.findAll({
      include: [Book]
    })
    .then(authors => res.render('Authors', {authors}))
    .catch(err => res.send(err))
  }
}

module.exports = Controller;
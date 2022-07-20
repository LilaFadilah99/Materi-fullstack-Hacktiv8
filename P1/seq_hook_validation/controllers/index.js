const { User } = require('../models');

class Controller {
  static showAll(req, res) {
    User.findAll()
    .then((result) => {
      // console.log(result);
      // res.send(result);
      res.render('home', { users: result });
    })
    .catch((err) => {
      // console.log(err.message);
      res.send(err.message);
    })
  }

  static formAdd(req, res) {
    res.render('form', { user: null });
  }
  
  static create(req, res) {
    let newUser = req.body;
    // console.log(newUser);
    let { first_name, last_name, gender, dob, email } = newUser;
    User.create({
      first_name, last_name, gender, dob, email
    })
    .then((result) => {
      res.redirect('/');
    })
    .catch(err => {
      // console.log(err);
      if (err.name === 'SequelizeValidationError') {
        // res.send(err.errors);
        res.render('error', { errors: err.errors });
      } else {
        res.send(err);
      }
    })
  }
  
  static formEdit(req, res) {
    // perlu ambil dulu data by id
    const id = req.params.id;
    // console.log(id,'---id');
    User.findByPk(id)
    .then((result) => {
      // console.log(result.dataValues);
      res.render('form', { user: result.dataValues });
    })
    .catch(err => console.log(err))
  }
  
  static update(req, res) {
    const { first_name, last_name, gender, dob, email } = req.body;
    const { id } = req.params;
    // console.log(first_name, last_name, gender, dob, email, id);
    User.update(
      { first_name, last_name, gender, dob, email },
      { where: { id } }
    )
    .then((_) => {
      res.redirect('/');
    })
    .catch(err => {
      // console.log(err);
      if (err.name === 'SequelizeValidationError') {
        // res.send(err.errors);
        res.render('error', { errors: err.errors });
      } else {
        res.send(err);
      }
    })
  }
  
  static destroy(req, res) {
    User.destroy({
      where: {
        id: +req.params.id
      }
    })
    .then(() => {
        res.redirect('/')   
    }).catch((err) => {
        res.send(err)
    });
  }
}

module.exports = Controller;
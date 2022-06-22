class View {
  static read(instances){
    console.log(instances);
  }

  static successAddBank(instance){
    /*
    NationalBank {
      id: 4,
      name: 'Bank Mandiri',
      type: 'NationalBank',
      limit: 5,
      customers: []
    }
    */
   // Bank <nama bank> added succesfully
   console.log(`Bank ${instance.name} added successfully`);
  }

  static successDeleteBank(instance){
    // NationalBank {
    //   id: 5,
    //   name: 'Bank Mandiri',
    //   type: 'NationalBank',
    //   limit: 5,
    //   customers: []
    // }
    console.log(`Bank with name ${instance.name} deleted successfully`);
  }

  static bankNotFound(id){
    console.log(`Bank with id ${id} is not found`);
  }

  static showErr(err){
    console.log(err);
  }
}

module.exports = View
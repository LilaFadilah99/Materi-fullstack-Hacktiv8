const Model = require('../models/model')
const View = require('../views/view')

class Controller {
    static categoryList(){
        Model.categoryList((err, data) => {
            if(err){
                View.showErr(err)
            }else{
                View.categoryList(data)
            }
        })
    }
}

module.exports = Controller
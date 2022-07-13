const { Report } = require('../models/index')
class Controller {
    static homePage(request, response){
        response.render('home')
    }

    static reportsPage(request, response){
        Report.findAll({ // method sequelize adalah Promise base function
            attributes : ['id', 'event', 'dateOfEvent'],
            order : [
                ['dateOfEvent', 'DESC']
            ]
        })
        .then((res) => {
            response.render('listReports', { reports : res})
        })
        .catch((err) => {
            response.send(err)
        })
    }

    static deleteReport(request, response){
        let id = +request.params.id
        Report.destroy({
            where : {
                id : id
            }
        })
        .then((res) => {
            response.redirect('/reports')
        })
        .catch((err) => {
            response.send(err)
        })
    }
}

module.exports = Controller
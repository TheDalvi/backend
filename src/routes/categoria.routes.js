const controller = require('../../src/controllers/categoria/categoria.constroller')
module.exports = (app) => {
    app.get('/categoria/:q/:p/:l', controller.getFilter);
    app.get('/categoria/byid/:Id', controller.getById);
    app.put('/categoria/update', controller.update);
    app.post('/categoria/add', controller.add);
    app.delete('/categoria/remove/:Id', controller.remove);
    app.get('/categoria/getall', controller.getall);
}
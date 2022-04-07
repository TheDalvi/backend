const controller = require('../controllers/alquiler/alquiler.controller')
module.exports = (app) => {
    app.get('/alquiler/:q/:p/:l', controller.getFilter);
    app.get('/alquiler/byid/:Id', controller.getById);
    app.put('/alquiler/update', controller.update);
    app.post('/alquiler/add', controller.add);
    app.delete('/alquiler/remove/:Id', controller.remove);
}
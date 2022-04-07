const controller = require('../controllers/persona/persona.controller')
module.exports = (app) => {
    app.get('/persona/:q/:p/:l', controller.getFilter);
    app.get('/persona/byid/:Id', controller.getById);
    app.put('/persona/update', controller.update);
    app.post('/persona/add', controller.add);
    app.delete('/persona/remove/:Id', controller.remove);
}
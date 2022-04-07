const service = require("../../services/persona.service")

const getFilter = async(req, res) => {
    try {
        let q = req.params.q;
        let p = req.params.p;
        let l = req.params.l;
        let result = await service.getFilter(q, l, p);

        res.status(200).send({
            success: true,
            result
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            result: error.message
        });
    }
}

const getById = async(req, res) => {
    try {
        let id = req.params.Id;
        let result = await service.getById(id);
        res.status(200).send({
            success: true,
            result
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            result: error.message
        });
    }

}
const update = async(req, res) => {
    try {
        let usuario = req.body.usuario;
        let result = await service.update(usuario);
        res.status(200).send({
            success: true,
            result
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            result: error.message
        });
    }

}
const remove = async(req, res) => {
    try {
        let id = req.params.Id;
        let result = await service.remove(id);
        res.status(200).send({
            success: true,
            result
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            result: error.message
        });
    }
}
const add = async(req, res) => {
    try {
        let persona = req.body.persona;
        let result = await service.create(persona);
        res.status(200).send({
            success: true,
            result
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            result: error.message
        });
    }

}


module.exports = {
    getFilter,
    getById,
    add,
    remove,
    update
};
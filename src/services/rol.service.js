const sequelize = require("../../dataService");
const { rolModel } = require("../models/rol.model")
const create = (rol) => {
    return rolModel.create(rol);
}

const getFilter = async(q, l = 10, p = 1) => {
    let result = await sequelize.query(
        `SELECT * FROM 
        "rol" 
        WHERE 
        UPPER("Descripcion")
        LIKE :q
        ORDER BY "Id"
        LIMIT :l OFFSET :p;
        `, {
            replacements: {
                q: (q ? '%' + q.toUpperCase() + '%' : '%'),
                l: l,
                p: p
            }
        });
    result = (result && result[0]) ? result[0] : [];
    return result;
}

const getById = async(id) => {
    let result = await rolModel.findByPk(id);
    return result;

}

const update = async(rol) => {
    const count = await rolModel.update(
        rol, {
            where: {
                Id: rol.Id
            }
        });
    if (count > 0) {
        const rolResult = await rolModel.findByPk(rol.Id)
        return rolResult.getDataValue;
    }
    return null;
}

const remove = async(Id) => {
    const count = await rolModel.destroy({
        where: {
            Id: Id
        },
    });
    return (count > 0)
}

module.exports = { update, remove, getFilter, getById, create };
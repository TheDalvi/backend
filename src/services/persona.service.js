const sequelize = require("../../dataService");
const { personaModel: personaModel } = require("../models/persona.model")
const create = (persona) => {
    return personaModel.create(persona);
}

const getFilter = async(q, l = 10, p = 1) => {
    let result = await sequelize.query(
        `SELECT * FROM 
        "persona" 
        WHERE 
        CONCAT  (UPPER("Nombre"),' ',UPPER("Apellido"))
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
    let result = await personaModel.findByPk(id);
    return result;

}

const update = async(persona) => {
    const count = await personaModel.update(
        persona, {
            where: {
                Id: persona.Id
            }
        });
    if (count > 0) {
        const personaResult = await personaModel.findByPk(persona.Id)
        return personaResult.getDataValue;
    }
    return null;
}

const remove = async(Id) => {
    const count = await personaModel.destroy({
        where: {
            Id: Id
        },
    });
    return (count > 0)
}

module.exports = { update, remove, getFilter, getById, create };
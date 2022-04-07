/* jshint indent: 2 */
const { DataTypes } = require("sequelize");
const sequelize = require('../../dataService')
var personaModel = sequelize.define("persona", {
    Id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: true
    },
    // RolId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true
    // },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Apellido: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Documento: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Direccion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    FechaNacimiento: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Usuario: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Contrasenha: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Telefono: {
        type: DataTypes.STRING,
        allowNull: true
    },


}, {
    tableName: 'persona',
    modelName: 'persona',
    createdAt: false,
    updatedAt: false,
    deletedAt: false
});
module.exports = { personaModel }
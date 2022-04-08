const { DataTypes } = require("sequelize");
const sequelize = require('../../dataService')
var alquilerModel = sequelize.define("localalquiler", {
    Id: {
        type: DataTypes.INTEGER.UNSIGNED,

        primaryKey: true,
        autoIncrement: true,
    },
    PersonaId: {
        type: DataTypes.INTEGER.UNSIGNED,

    },
    CategoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Referencia: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CantidadHabitaciones: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Permite_Mascotas: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    Descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Ubicacion_GPS: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Observacion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Precio: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
    },
    Garantia: {
        type: DataTypes.DECIMAL(18, 2),
        allowNull: false,
    },
}, {
    tableName: "localalquiler",
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    deletedAt: false
});
module.exports = { alquilerModel }
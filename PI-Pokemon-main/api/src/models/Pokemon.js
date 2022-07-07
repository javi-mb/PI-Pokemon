const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "pokemon",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hp: {
        type: DataTypes.STRING,
        defaultValue: "50",
      },
      attack: {
        type: DataTypes.STRING,
        defaultValue: "50",
      },
      defense: {
        type: DataTypes.STRING,
        defaultValue: "50",
      },
      speed: {
        type: DataTypes.STRING,
        defaultValue: "50",
      },
      height: {
        type: DataTypes.STRING,
        defaultValue: "50",
      },
      weight: {
        type: DataTypes.STRING,
        defaultValue: "50",
      },
      img: {
        type: DataTypes.TEXT,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};

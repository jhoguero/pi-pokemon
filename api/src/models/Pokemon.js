const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    img: {
      type: DataTypes.STRING,
      defaultValue: 'https://pm1.narvii.com/5762/3f38ecfb4a23493049ca4ec365b17e74287d5e1d_hq.jpg'
    },
    health: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
    },
    defense: {
      type: DataTypes.INTEGER,
      defaultValue: 50
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 50
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 10
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 100
    }
  }, { timestamps: false });
};

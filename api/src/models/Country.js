const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    }, 

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },

    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },    

    subregion: {
      type:DataTypes.STRING,
      allowNull: false,
    },

    are: {
      type:DataTypes.NUMBER,
      allowNull: false,
    },

    population: {
      type:DataTypes.NUMBER,
      allowNull: false,
    }

  });
};

const { DataTypes } = require('sequelize');
module.exports = ( sequelize ) => {

   sequelize.define('activity', {

     name: {
        type: DataTypes.STRING,
        allowNull: false
     },

     difficulty: {
      type: DataTypes.NUMBER,
      allowNull: false
     },

     duration: {
      type: DataTypes.STRING,
      allowNull: false
     },

     status: {
      type: DataTypes.ENUM("Verano, Otoño, Invierno, Primavera"),
      allowNull: false
    },

   });
};
const axios = require('axios');
const { Type } = require('../db');


module.exports = async () => {
  
  try {
    //Llamado de axios para traer todos los tipos de pokemon desde 'pokeapi.co'
    const response = (await axios('https://pokeapi.co/api/v2/type')).data.results;
    //Invoco el método 'bulkCreate' del modelo 'Type' para guardar los tipos en la base de datos
    await Type.bulkCreate(response);
  } catch (error) {
    //En caso de error lo lanzo al próximo catch
    console.error(error.message);
  }
};

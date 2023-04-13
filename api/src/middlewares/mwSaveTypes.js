const axios = require('axios');
const { Type } = require('../db');

//Creo una variable booleana con let para poder modificar su valor
let flag = false;

module.exports = async (req, res, next) => {
  //Si flag ya está en 'true' invoco 'next' para que el middleware de paso al controller siguiente
  if (flag) return next(); // <-- el return corta el flujo y no se ejecuta lo de abajo
  try {
    //Llamado de axios para traer todos los tipos de pokemon desde 'pokeapi.co'
    const response = (await axios('https://pokeapi.co/api/v2/type')).data.results;
    //Invoco el método 'bulkCreate' del modelo 'Type' para guardar los tipos en la base de datos
    await Type.bulkCreate(response);
    //seteo flag en 'true' para que una vez guardados en base de datos los tipos no se vuelva a ejecutar el middleware
    flag = true;
    //Invoco 'next' para que el middleware de paso al controller siguiente
    next();
  } catch (error) {
    //En caso de error lo lanzo al próximo catch
    throw new Error(error.message);
  }
};

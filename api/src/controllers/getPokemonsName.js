const { Op } = require('sequelize');
const { Pokemon, Type } = require('../db');
const axios = require('axios');

module.exports = async (req, res) => {
  
  if (req.query.name) {
    //Destructuro 'name' de 'req.query' y lo asigno en minúscula para que  la búsqueda sea 'case insensitive'
    const name = req.query.name.toLowerCase();
    try {
      
      const dbSearchByName = await Pokemon.findAll({
        attributes: ['id', 'img', 'name'],
        include: [{
          model: Type,
          attributes: ['name'],
          through: {
            attributes: []
          }
        }],
        where: {
          name: {
            [Op.like]: name
          }
        }
      });
      //Respuesta de la ruta en caso de encontrar en base de datos
      if(dbSearchByName.length){
        return res.status(200).json(dbSearchByName[0]);
      }
      ////API
      //Llamado de axios a 'pokeapi.co' con 'name' como endpoint para buscar en API en caso de no encontrar en base de datos
      const response = (await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)).data
      //Formateo de la respuesta para que la data coincida con el requerimiento del front
      const apiSearchByName = [{
        id: response.id,
        name: response.name,
        img: response.sprites.other.dream_world.front_default,
        types: response.types.map(t => {
          return { name: t.type.name };
        })
      }]
      
      res.status(200).json(apiSearchByName);
    } catch (error) {
      
      res.status(404).json({ error: error.message });
    }
  } else {
    try {
      ////API
      //Llamado de axios para traer los primeros 40 pokemons con sus urls
      const firstResponse = (await axios('https://pokeapi.co/api/v2/pokemon?limit=150')).data.results;
      //Mapeo de 'firstResponse' para obtener un array con solamente las 40 urls
      const urls = firstResponse.map(p => p.url);
      //Mapeo de 'urls' para obtener un arreglo con las 40 promesas sin resolver
      const promises = urls.map(url => axios(url));
      //Resolución de las 40 promesas en simultaneo usando Promise All
      const allRespones = await Promise.all(promises);
      //Formateo de allResponses para obtener array con los 40 pokemons y las propiedades de la ruta principal
      const apiPokemons = allRespones.map(r => {
        return {
          id: r.data.id,
          name: r.data.name,
          img: r.data.sprites.other.dream_world.front_default,
          types: r.data.types.map(t => {
            return { name: t.type.name };
          })
        };
      });

      ////DB
      //Invoco el método 'findAll' del modelo 'Pokemon' para traer los pokemon de mi base de datos junto con los tipos relacionados desde el modelo 'Type'. Defino los atributos a traer para según la ruta principal
      const dbPokemons = await Pokemon.findAll({
        attributes: ['id', 'name', 'img'],
        include: [{
          model: Type,
          attributes: ['name'],
          through: {
            attributes: []
          }
        }]
      });

      ////ALL
      //Concateno los pokemons traidos de la base de datos con los traidos de la api
      const allPokemons = [...dbPokemons, ...apiPokemons];
    

      res.status(200).json(allPokemons);
    } catch (error) {

      res.status(404).json({ error: error.message });
    }
  }
};

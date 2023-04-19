const { Pokemon, Type } = require('../db');
const axios = require('axios');
const isUUID = require ('../utils/isUUID')



module.exports = async (req, res) => {
    const {id} = req.params;
    if (isUUID(id)){
        try{
          // findBypk el cual busca por PK del ids
            const dbPokemonById = await Pokemon.findByPk(id, {
                include: [{
                  model: Type,
                  attributes: ['name'],
                  through: {
                    attributes: []
                  }
                }] 
        })
        if (!dbPokemonById) throw new Error('Pokemon not found!')

        res.status(200).json(dbPokemonById);
    }   catch(error){
        res.status(404).json({ error: error.message });
    }
        }else {
        try {
      //Llamado de axios a la url de pokeapi con el id como endpoint
      const response = (await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;
      console.log(typeof(response));
      //Formateo de la respuesta para para coincidir con la data solicitada por el componente 'detail' de react
      const apiPokemonById = {
        id: response.id,
        name: response.name,
        img: response.sprites.other.dream_world.front_default,
        types: response.types.map(t => {
          return { name: t.type.name };
        }),
        health: response.stats.find(s => s.stat.name === 'hp').base_stat,
        attack: response.stats.find(s => s.stat.name === 'attack').base_stat,
        defense: response.stats.find(s => s.stat.name === 'defense').base_stat,
        speed: response.stats.find(s => s.stat.name === 'speed').base_stat,
        height: response.height,
        weight: response.weight
      };
      
      res.status(200).json(apiPokemonById);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

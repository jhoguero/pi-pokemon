const {Pokemon} = require("../db");

module.exports = async (req, res) =>{
    try{
        const newPokemon = await Pokemon.create(req.body);
        console.log(req.body)
        await newPokemon.setTypes(req.body.types);
        

        res.status(201).json({
            message: 'Pokemon successfully created',
            new_pokemon: newPokemon
          });
    }   catch (error) {
        res.status(400).json({ error: error.message });
    }
};

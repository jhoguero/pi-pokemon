const {Pokemon} = require("../db");

module.exports = async (req, res) =>{
    try{
        //Uso el método 'create' del modelo 'Pokemon' para crear una nueva entidad pasando el body como argumento
        const newPokemon = await Pokemon.create(req.body);
        console.log(req.body)
        //Uso el método 'setTypes' del modelo 'Pokemon' para pasarle las foreign keys por body y establecer relación con el modelo 'Type'
        await newPokemon.setTypes(req.body.types);
        

        res.status(201).json({
            message: 'Pokemon successfully created',
            new_pokemon: newPokemon
          });
    }   catch (error) {
        res.status(400).json({ error: error.message });
    }
};

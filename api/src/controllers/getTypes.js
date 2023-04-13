const { Type } = require('../db');

module.exports = async (req, res) => {
  try {
    //Invoco el método 'findAll' del modelo 'Type' para traer todos los tipos desde la base de datos
    const allTypes = await Type.findAll();
   
    res.status(200).json(allTypes);
  } catch (error) {
    
    res.status(404).json({ error: error.message });
  }
};

const mongodb = require('../db/connect');

const getData = async (req, res) => {
  try {
    const db = mongodb.getDb();
    const result = await db.collection('contacts').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result); // Ahora devolvemos toda la lista de contactos
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving contacts', details: err });
  }
};

module.exports = { getData };

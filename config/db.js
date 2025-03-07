require('dotenv').config();

const mongoose = require('mongoose');

//const MONGO_URI = 'mongodb://localhost:27017/sensores';
const MONGO_URI = process.env.MONGO_CREDENTIALS || 'mongodb://localhost:27017/sensores'; // Hacemos que la url que tenemos la coja como variable de entorno
                                                                                         // y si no la encuentra, coja la que le ponemos deslpués del ||.
                                                                                         // De esta manera, es mucho más portable y no compartimos las credenciales.

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Conexión a MongoDB establecida');
    } catch (err) {
        console.error('Error al conectar a MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;

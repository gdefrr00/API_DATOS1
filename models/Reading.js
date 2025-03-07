const mongoose = require('mongoose');
const ReadingSchema = new mongoose.Schema({
// No ponemos el id puesto que MongoDB lo genera automáticamente.
sensorId: String,
value: Number,
unit: String,
timestamp: { type: Date, default: Date.now }
});
// Exportamos el modelo, el nombre debe estar en singular
module.exports = mongoose.model('Reading', ReadingSchema);
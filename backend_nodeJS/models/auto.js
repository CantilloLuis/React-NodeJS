const mongoose = require("mongoose");
/*const mongooseDateFormat = require('mongoose-date-format');*/

const auto = mongoose.Schema({

    // Atributos que se utilizaran y  migraran a la BD
    id: { type: Number, required: true },
    nombre: { type: String, required: true },
    cilindraje: { type: String, required: true },
    kilometraje: { type: String, require: true },


});
/*equipo.plugin(mongooseDateFormat);*/
module.exports = mongoose.model("auto", auto);

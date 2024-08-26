const Auto = require("../models/auto");

exports.getAuto = (req, res) => {
    Auto.find().then((autoResult) => {
        res.status(200).json(autoResult);
    });
};

exports.addAuto = (req, res) => {
    const autoAdd = new Auto({


        id: req.body.id,
        nombre: req.body.nombre,
        cilindraje: req.body.cilindraje,
        kilometraje: req.body.kilometraje


    });

    autoAdd.save().then((createdAuto) => {
        console.log(createdAuto);
        res.status(201).json("Creado satisfactoriamente");
    });
};





exports.updateAuto = async (req, res) => {

    try {

        const { id, nombre, cilindraje, kilometraje } = req.body
        let auto = await Auto.findById(req.params.id)

        if (!auto) {
            res.status(404).json({ msg: "No existe el equipo" })


        }
        equipo.id = id
        equipo.nombre = nombre
        equipo.cilindraje = cilindraje
        equipo.kilometraje = kilometraje


        auto = await Auto.findByIdAndUpdate({ _id: req.params.id }, auto, { new: true })
        res.json(auto)

    } catch (error) {

        console.log(error)
        res.status(500).send("Error al actualizar el equipo")
    }
}




exports.deleteAuto = (req, res) => {
    const id = req.params.id;

    Auto.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Auto con id no fue eliminado ${id}. el id es incorrecto` })
            } else {
                res.send({
                    message: "Auto eliminada con exito!"
                })
            }
        })
} 
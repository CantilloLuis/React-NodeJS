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





exports.updateEquipo = async (req, res) => {

    try {

        const { idEquipo, nombreEquipo, idProyecto, fecha } = req.body
        let equipo = await Equipo.findById(req.params.id)

        if (!equipo) {
            res.status(404).json({ msg: "No existe el equipo" })


        }
        equipo.idEquipo = idEquipo
        equipo.nombreEquipo = nombreEquipo
        equipo.idProyecto = idProyecto
        equipo.fecha = fecha


        equipo = await Equipo.findByIdAndUpdate({ _id: req.params.id }, equipo, { new: true })
        res.json(equipo)

    } catch (error) {

        console.log(error)
        res.status(500).send("Error al actualizar el equipo")
    }
}




exports.deleteEquipo = (req, res) => {
    const id = req.params.id;

    Equipo.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Equipo con id no fue eliminado ${id}. el id es incorrecto` })
            } else {
                res.send({
                    message: "Equipo eliminada con exito!"
                })
            }
        })
} 
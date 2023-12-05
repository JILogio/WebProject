const Location = require('../models/location')

var locationController = {

    save: async (req,res) => {
        try {
            const location = new Location({
                street: req.body.street,
                district: req.body.district,
                postal: req.body.postal,
            })
    
            const result = await location.save()
            res.send(result)
        } catch(err) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos o inválidos'
            });
        }
    },

    getLocations: async (req,res) => {
        try {
            const locations = await Location.find({}).exec();
            if (locations.length == 0) {
              return res.status(200).json({
                status: 'error',
                message: 'No hay datos'
              });
            }
        
            return res.send({
              status: 'success',
              locations
            });
        } catch (err) {
            console.log(err)
            return res.status(200).send({
              status: 'error',
              message: 'Error al devolver datos'
            });
        }
    },

    delete: async (req, res) => {
        try {
            const { street, postal } = req.params;

            const locationDeleted = await Location.findOneAndDelete({ street, postal }).exec();
    
            if (!locationDeleted) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe'
                });
            }
    
            return res.send({
                status: 'success',
                locationDeleted
            });
        } catch (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Error al borrar'
            });
        }
    }
}

module.exports = locationController;
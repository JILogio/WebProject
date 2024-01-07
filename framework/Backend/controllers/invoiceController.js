const Invoice = require('../models/Invoice')

var orderController = {
    save: async (req,res) => {
        try {
            const invoice = new Invoice({
                idOrder: req.body.idOrder,
                date: req.body.date,
                totalValue: req.body.totalValue,
                idLocation: req.body.idLocation
            })

            await invoice.save()
            res.send({
                status: 'success',
                message: 'creada'
            })
        } catch (err) {
            console.log(err)
            return res.status(200).send({
                status: 'error',
                message: 'Error al crear la factura'
            })
        }
    },

    getInvoices: async (req,res) => {
        try {
            const invoices = await Invoice.find({}).exec();
            if(invoices.length == 0){
                return res.status(200).json({
                    status: 'error',
                    message: 'No hay facturas'
                });
            }

            return res.send({
                status: 'success',
                invoices
            });
        } catch (err) {
            console.log(err)
            return res.status(200).send({
                status: 'error',
                message: 'Error al devolver datos'
            })
        }
    },

    search: async (req,res) => {
        try {
            const searchString = req.query.search;

            const invoice = await Invoice.find({"$or":[{"_id":searchString}]}).exec();

            if(!invoice || invoice.length <= 0){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay datos que coincidan con la busqueda'
                });
            }

            return res.send({
                status: 'success',  
                invoice
            })
        } catch (err) {
            console.log(err)
            return res.status(500).send({
                status: 'error',
                message: 'Error en la petición'
            })
        }
    },

    delete: async (req, res) => {
        try {
            var invoice = req.params.id;
    
            const invoiceDeleted = await Invoice.findOneAndDelete({ _id: invoice }).exec();
    
            if (!invoiceDeleted) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe'
                });
            }
    
            return res.send({
                status: 'success',
                invoiceDeleted
            });
        } catch (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Error al borrar'
            });
        }
    },
}

module.exports = orderController;
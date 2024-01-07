const Order = require('../models/order')

var orderController = {

    save: async (req,res) => {
        try {
            const order = new Order({
                idUser: req.body.idUser,
                idProduct: req.body.idProduct,
                amount: req.body.amount,
            })

            await order.save()
            res.send({
                status: 'success',
                message: 'Orden Realizada'
            })
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Error al realizar la orden'
            })
        }
    },

    getOrders: async (req,res) => {
        try {
            const orders = await Order.find({}).exec();
            if(orders.length == 0){
                return res.status(200).json({
                    status: 'error',
                    message: 'No hay ordenes'
                });
            }

            return res.send({
                status: 'success',
                orders
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

            const order = await Order.find({"$or":[{"_id":searchString}]}).exec();

            if(!order || order.length <= 0){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay datos que coincidan con la busqueda'
                });
            }

            return res.send({
                status: 'success',  
                order
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
            var order = req.params.id;
    
            const orderDeleted = await Order.findOneAndDelete({ _id: order }).exec();
    
            if (!orderDeleted) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe'
                });
            }
    
            return res.send({
                status: 'success',
                orderDeleted
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
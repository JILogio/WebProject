const Product = require('../models/Product')

var productController = {

    save: async (req,res) => {
        try {
            const product = new Product({
                name: req.body.name,
                type: req.body.type,
                price: req.body.price,
            })
    
            const result = await product.save()
            res.send(result)
        } catch(err) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos o inválidos'
            });
        }
    },

    getProducts: async (req,res) => {
        try {
            const products = await Product.find({}).exec();
            if (products.length == 0) {
              return res.status(200).json({
                status: 'error',
                message: 'No hay productos'
              });
            }
        
            return res.send({
              status: 'success',
              products
            });
        } catch (err) {
            console.log(err)
            return res.status(200).send({
              status: 'error',
              message: 'Error al devolver datos'
            });
        }
    },

    search: async (req, res) => {
        try {
            const searchString = req.query.search;
    
            const product = await Product.find({"$or": [
                {"name": searchString}
            ]},).exec();
    
            if (!product || product.length <= 0) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay datos que coincidan con la búsqueda'
                });
            }
    
            return res.send({
                status: 'success',
                product
            });
        } catch (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Error en la petición'
            });
        }
    },

    delete: async (req, res) => {
        try {
            var productName = req.params.name;
    
            const productDeleted = await Product.findOneAndDelete({ name: productName }).exec();
    
            if (!productDeleted) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe'
                });
            }
    
            return res.send({
                status: 'success',
                productDeleted
            });
        } catch (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Error al borrar'
            });
        }
    }
}

module.exports = productController;
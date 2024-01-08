const Invoice = require('../models/Invoice')
const Location = require('../models/location')
const Order = require('../models/order')
const Product = require('../models/Product')
const User = require('../models/User')
const dateFormat = require('dateformat');


var reportController = {

    getProductsForLocation: async (req, res) => {
        try {
          const locationF = req.params.location;
    
          var location = await Location.find({ district: locationF });
          if (!location) {
            return res.status(404).json({ error: 'Location not found' });
          }

          let invoices = []

          for(let i = 0; i < location.length; i++){
            invoices.push(await Invoice.find({ idLocation: [location[i]._id] }).populate('idOrder'));
          }

          const data = []

          for(let i = 0; i < invoices.length; i++){
            for(var j=0; j < invoices[i][0].idOrder.length; j++){
              data.push(invoices[i][0].idOrder[j])
            }
          }

          const productIds = []

          for(let i = 0; i < data.length; i++){
            const response = await Order.find({ _id: data[i]});
            productIds.push(response[0].idProduct);
          }

          const products = await Product.find({ _id: { $in: productIds } });
    
          res.status(200).json(products);
        } catch (error) {
          res.status(500).json({ error: error.toString() });
        }
    },

    getAllInvoices: async (req, res) => {
      try {
        const invoices = await Invoice.find().populate('idLocation').exec();

        let data = []

        for (let i = 0; i < invoices.length; i++){
          const location = await Location.findById(invoices[i].idLocation);
          const user = await Order.findById(invoices[i].idOrder[0]);
          const name = await User.findById(user.idUser);
          data.push({
            name: name.name,
            date: dateFormat(invoices[i].date, 'dd/mm/yyyy'),
            totalValue: invoices[i].totalValue,
            district: location.district
          })
        }
  
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: error.toString() });
      }
  },

  getAllOrders: async (req,res) => {
    try {
      const orders = await Order.find().exec();
      const users = []
      const products = []
      const data = []

      for(let i = 0; i < orders.length; i++) {
        users.push(await User.find(orders[i].idUser))
      }

      for(let i = 0; i < orders.length; i++) {
        products.push(await Product.find(orders[i].idProduct))
      }

      for(let i = 0; i < users.length; i++){
        data.push({
          Client: users[i][0].name,
          Product: products[i][0].name,
          Amount: orders[i].amount
        })
      }


      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  }
}

module.exports = reportController;
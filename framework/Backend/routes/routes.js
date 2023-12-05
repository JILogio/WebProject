const router = require('express').Router();
const userController = require('../controllers/UserController');
const productController = require('../controllers/ProductController');
const locationController = require('../controllers/locationController');

//Rutas del Schema User
router.post('/User/register',userController.register);
router.post('/User/login',userController.login); 
router.get('/User/user',userController.getUser);
router.post('/User/logout',userController.logout);

//Rutas del Schema Product
router.post('/Product/save',productController.save);
router.get('/Product/products',productController.getProducts);
router.get('/Product/product',productController.search);
router.delete('/Product/delete/:name',productController.delete);

//Rutas del Schema location
router.post('/Location/save',locationController.save);
router.get('/Locations',locationController.getLocations);
router.delete('/Location/delete/:street/:postal', locationController.delete);

module.exports = router;
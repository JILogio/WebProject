const router = require('express').Router();
const userController = require('../controllers/UserController');
const productController = require('../controllers/ProductController');
const locationController = require('../controllers/locationController');
const { mdwares } = require('../middlewares');

//Rutas del Schema User
router.post('/User/register',userController.register);
router.post('/User/login',userController.login); 
router.get('/User/user',userController.getUser);
router.post('/User/logout',userController.logout);
router.get('/User/users',[mdwares.verifyToken,mdwares.isAdmin],userController.getUsers);
router.get('/User/search',[mdwares.verifyToken,mdwares.isAdmin],userController.search);
router.delete('/User/delete/:search',[mdwares.verifyToken,mdwares.isAdmin],userController.delete);

//Rutas del Schema Product
router.post('/Product/save',[mdwares.verifyToken,mdwares.isAdmin],productController.save);
router.get('/Product/products',[mdwares.verifyToken],productController.getProducts);
router.get('/Product/product',[mdwares.verifyToken],productController.search);
router.delete('/Product/delete/:name',[mdwares.verifyToken,mdwares.isAdmin],productController.delete);

//Rutas del Schema location
router.post('/Location/save',[mdwares.verifyToken],locationController.save);
router.get('/Locations',[mdwares.verifyToken,mdwares.isAdmin],locationController.getLocations);
router.delete('/Location/delete/:street/:postal',[mdwares.verifyToken,mdwares.isAdmin],locationController.delete);

module.exports = router;
const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.getAll);

router.post('/', productController.add);

router.get('/:id', productController.getById);

router.put('/:id', productController.update);

router.delete('/:id', productController.exclude);

module.exports = router;
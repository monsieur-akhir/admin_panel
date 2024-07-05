const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

// Route pour créer un produit (admin seulement)
router.post('/create', protect, admin, createProduct);

// Route pour récupérer tous les produits (public)
router.get('/', getProducts);

// Route pour récupérer un produit par ID (public)
router.get('/:id', getProductById);

// Route pour mettre à jour un produit (admin seulement)
router.put('/:id', protect, admin, updateProduct);

// Route pour supprimer un produit (admin seulement)
router.delete('/:id', protect, admin, deleteProduct);

module.exports = router;

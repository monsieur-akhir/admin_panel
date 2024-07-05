const express = require('express');
const router = express.Router();
const { createOrder, getOrders } = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');

// Route pour créer une commande (utilisateur authentifié)
router.route('/').post(protect, createOrder);

// Route pour récupérer toutes les commandes (admin seulement)
router.route('/').get(protect, admin, getOrders);

module.exports = router;

const express = require('express');
const router = express.Router();
const { authUser, registerUser, getUserProfile, updateUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// Routes de l'authentification et de l'inscription
router.post('/login', authUser);
router.route('/').post(registerUser);

// Routes du profil utilisateur (protégées par middleware)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

module.exports = router;

const asyncHandler = require('express-async-handler');
const Product = require('../models/Product');

// @desc    Créer un produit
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const { name, description, price, stock, category, isFresh, images } = req.body;

  const product = new Product({
    name,
    description,
    price,
    stock,
    category,
    isFresh,
    images,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc    Récupérer tous les produits
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Récupérer un produit par ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Produit non trouvé');
  }
});

// @desc    Mettre à jour un produit
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, description, price, stock, category, isFresh, images } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.stock = stock || product.stock;
    product.category = category || product.category;
    product.isFresh = isFresh !== undefined ? isFresh : product.isFresh;
    product.images = images || product.images;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Produit non trouvé');
  }
});

// @desc    Supprimer un produit
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: 'Produit supprimé' });
  } else {
    res.status(404);
    throw new Error('Produit non trouvé');
  }
});

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};

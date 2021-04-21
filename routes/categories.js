const express = require('express');
const router = express.Router();
const categories = require('../controllers/categories');

// get all categories
router.get('/', categories.getAllCategories);

// add a new category
router.post('/new-category', categories.addCategories);

// edit a category
router.put('/edit-category/:id', categories.editCategory);

// delete a category
router.delete('/delete-category', categories.deleteCategory);

module.exports = router
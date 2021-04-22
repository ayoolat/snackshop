const express = require('express');
const router = express.Router();
const authentication = require('../middleware/authentication');
const authorization = require('../middleware/authorization');
const categories = require('../controllers/categories');

// get all categories
router.get('/', authentication, authorization(process.env.INTERNAL), categories.getAllCategories);

// add a new category
router.post('/new-category', authentication, authorization(process.env.ADMIN), categories.addCategories);

// edit a category
router.put('/edit-category/:id', authentication, authorization(process.env.ADMIN), categories.editCategory);

// delete a category
router.delete('/delete-category', authentication, authorization(process.env.ADMIN), categories.deleteCategory);

module.exports = router
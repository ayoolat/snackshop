// require category model
const categories = require('../models/categories')

db = require('../config/database')

// get all categories
exports.getAllCategories = async (req, res, next) => {
    // find all categories in database
    const allCategories = await categories.findAll({
        attributes:['Id','category'] //select the attributes 'Id' and 'category'
    })
        .then(allCategories => {
            return res.status(200).json({status: 'success', response: allCategories});
        })
        .catch(err => {
            return res.status(400).json({status: 'There has been an error', response: err});
        })
}

// add a new category
exports.addCategories = async (req, res, next) => {
    const {category} = req.body
    const {id} = req.params
    // create a new entry in the category table
    const addCategory = await categories.create({
            category : `${category}`,
    })
        .then(addCategory => {
            return res.status(200).json({status: 'success', response: req.body});
        })
        .catch(err => {
            return res.status(400).json({status: 'There has been an error', response: err});
        })
}

// edit a category
exports.editCategory = async (req, res, next) => {
    const {category} = req.body
    const {id} = req.params
    // Update a category name on the category table that satisfies the 'where' condition
    const editCategory = await categories.update({
            category : `${category}`
        },
        {
            where: {
                id : `${id}`
            }
    })
        .then(addCategory => {
            return res.status(200).json({status: 'success', response: req.body});
        })
        .catch(err => {
            return res.status(400).json({status: 'There has been an error', response: err});

        })
}

// delete a category
exports.deleteCategory = async (req, res, next) => {
    const {id} = req.body
    // delete a category from the category table that satisfies the 'where' condition
    const deleteCategory = await categories.destroy({
        where: {
            id: id
        }
    })
    .then(addCategory => {
        return res.status(200).json({status: 'success', response: req.body});
    })
    .catch(err => {
        return res.status(400).json({status: 'There has been an error', response: err});
    })
}
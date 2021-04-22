const sizes = require('../models/sizes');

exports.getAllSizes = async (req, res, next) => {
    const allCakeSizes = await sizes.findAll({
        attributes : ['id', 'size']
    })
        .then(allCakeSizes => {
            return res.status(200).json({status: 'success', response: allCakeSizes});
        })
        .catch(err => {
            return res.status(400).json({status: 'There has been an error', response: err});
        })
};

exports.addASize = async(req, res, next) => {
    const {size} = req.body;
    const addSize = await sizes.create({
        size : `${size}`
    })
        .then(addSize => {
            return res.status(200).json({status: 'success', response: req.body});
        })
        .catch(err => {
            return res.status(400).json({status: 'There has been an error', response: err});
        })
}

exports.editSize = async (req, res, next) => {
    const {size} = req.body;
    const {id} = req.params
    const editSize = await sizes.update({
        size : `${size}`
    },{
        where: {
            id : `${id}`
        }
    })
        .then(editSize => {
            return res.status(200).json({status: 'success', response: req.body});
        })
        .catch(err => {
            return res.status(400).json({status: 'There has been an error', response: err});
        })
}

exports.deleteSize = async (req, res, next) => {
    const {id} = req.body;
    const deleteSize = await sizes.destroy({
        where: {
            id: id
        }
    })
    .then(editSize => {
        return res.status(200).json({status: 'success', response: req.body});
    })
    .catch(err => {
        return res.status(400).json({status: 'There has been an error', response: err});
    })
}
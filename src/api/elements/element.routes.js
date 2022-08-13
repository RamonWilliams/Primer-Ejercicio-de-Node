const ElementRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteElement } = require('./element.controller');

ElementRoutes.get('/', getAll)
ElementRoutes.get('/:id', getById)
ElementRoutes.post('/', create)
ElementRoutes.patch('/:id', update)
ElementRoutes.delete('/:id', deleteElement)

module.exports = ElementRoutes
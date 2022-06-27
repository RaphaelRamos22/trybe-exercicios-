const ProductModel = require('../models/productModel');

const getAll = async () => {
  const result = await ProductModel.getAll()
  if(!result) return []
  return result
}

const getById = async (id) => {
  const result = await ProductModel.getById(id)
  if(!result) return []
  return result
}

const add = async (id, name, brand) => {
  if(id && name && brand){
      const result = await ProductModel.add(id, name, brand)
      return result
  }
  return []
}

const update = async (id, name, cartoon) => {
  const result = await ProductModel.update(id, name, cartoon)
  if(result != 1) return []
  return result
}

const exclude = async (id) => {
  const result = await ProductModel.exclude(id)
  if(!result) return []
  return result
}

module.exports = {add, getAll, getById, update, exclude}
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

const add = async (name, brand) => {
  if(name && brand){
      const result = await ProductModel.add(name, brand)
      return result
  }
  return []
}

const update = async (id, name, brand) => {
  const result = await ProductModel.update(id, name, brand)
  if(result != 1) return []
  return result
}

const exclude = async (id) => {
  const result = await ProductModel.exclude(id)
  if(!result) return []
  return result
}

module.exports = {add, getAll, getById, update, exclude}
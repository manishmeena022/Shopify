import express,{Router} from 'express'
import { 
    getProducts, 
    getProductById, 
    addNewProduct, 
    updateProduct, 
    deleteProduct, 
    addProductReview, 
    getTopProducts 
} from '../controllers/product.Controller.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const productRouter = Router()

productRouter.route('/').get(getProducts).post(protect, admin, addNewProduct)
productRouter.get('/top', getTopProducts)
productRouter.route('/:id').get(getProductById).put(protect, admin, updateProduct).delete(protect, admin, deleteProduct)
productRouter.route('/:id/reviews').post(protect, addProductReview)

export default productRouter
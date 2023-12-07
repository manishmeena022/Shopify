import express, { Router } from 'express'
import { 
    createOrderItems, 
    getMyOrders, 
    getOrderById,
    updateOrderToPaid, 
    updateOrderToDelivered, 
    getOrders
 } from '../controllers/order.Controller.js'
 import { protect, admin } from '../middleware/authMiddleware.js'

const orderRouter = Router()

orderRouter.route('/').post(protect, createOrderItems).get(protect, admin, getOrders)
orderRouter.route('/myorders').get(protect, getMyOrders)
orderRouter.route('/:id').get(protect, getOrderById)
orderRouter.route('/:id/pay').put(protect, updateOrderToPaid)
orderRouter.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export default orderRouter;
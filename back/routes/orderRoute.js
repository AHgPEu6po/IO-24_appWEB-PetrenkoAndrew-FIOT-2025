import express from 'express'
import { placeOrder, allOrders, userOrders, updateStatus, verify } from '../controllers/orderController.js'
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

orderRouter.get('/list', allOrders);
orderRouter.post('/status', updateStatus);
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/userorders', authUser, userOrders);
orderRouter.post('/verify', authUser, verify);

export default orderRouter
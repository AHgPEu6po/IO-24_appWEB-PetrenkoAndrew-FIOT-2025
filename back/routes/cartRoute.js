import expres from 'express'
import { addToCart, removeFromCart, getUserCart } from '../controllers/cartController.js'
import authUser from '../middleware/auth.js'

const cartRouter = expres.Router()

cartRouter.post('/get', authUser, getUserCart)
cartRouter.post('/add', authUser, addToCart)
cartRouter.post('/remove', authUser, removeFromCart)

export default cartRouter
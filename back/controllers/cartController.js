import userModel from "../models/userModel.js"

const addToCart = async (req, res) => {
    try {

        const { userId, itemId } = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        if (cartData[itemId]) {
            cartData[itemId] += 1
        } else {
            cartData[itemId] = 1
        }

        await userModel.findByIdAndUpdate(userId, { cartData })
        res.json({ success: true, message: 'Added to cart' })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

const removeFromCart = async (req, res) => {
    try {

        const { userId, itemId, quantity } = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        if (cartData[itemId]>0) {
            cartData[itemId] -= 1
        }

        await userModel.findByIdAndUpdate(userId, { cartData })
        res.json({ success: true, message: 'Removed from cart' })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

const getUserCart = async (req, res) => {
    try {

        const { userId } = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        res.json({ success: true, cartData })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export { addToCart, removeFromCart, getUserCart }
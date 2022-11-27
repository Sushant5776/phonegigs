import { validProductData } from "../../utils/addProduct/utils"
import {adminDBApp} from '../../utils/db/utils'

export default async function addProduct(req,res) {
    // Check if POST method is received
    if (!(req.method === 'POST')) return res.status(400).json({message: 'Method Not Allowed!'})

    // Validate body along with data received in body
    if (!validProductData(req.body)) return res.status(400).json({message: 'Cannot Create Product with the Given Data!'})

    // Product data is valid
    try {
        const data = await adminDBApp.firestore().collection('products').add({
            name: req.body.name.trim(),
            make: req.body.make.trim(),
            image: req.body.image.trim(),
            description: req.body.description.trim(),
            price: req.body.price,
            quantity: req.body.quantity
        })

        return res.status(200).json({id: data.id, name: req.body.name.trim(), make: req.body.make.trim(), image: req.body.image.trim(), description: req.body.description.trim(), price: req.body.price, quantity: req.body.quantity})
    } catch(error) {
        const errorMessage = getErrorMessage(error)
        return res.status(500).json({message: errorMessage})
    }
}
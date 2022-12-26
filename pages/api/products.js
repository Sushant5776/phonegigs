import { adminDBApp } from '../../utils/db'

export default async function getAllProducts(req, res) {
	if (!(req.method === 'GET')) return res.status(400).json({ message: 'Method Not Allowed!' })

	let products = await adminDBApp.firestore().collection('products').get()

	let docs = products.docs.map(document => ({ id: document.id, ...document.data() }))
	return res.status(200).json(docs)
}
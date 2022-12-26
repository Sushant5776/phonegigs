import { adminDBApp } from '../../utils/db'

export default async function getProduct(req, res) {
	if (!(req.method === 'GET')) return res.status(400).json({ message: 'Method Not Allowed!' })

	if (!req.query.id) return res.status(400).json({ message: 'insufficient data to fetch product details!' })

	const productDetails = await adminDBApp.firestore().doc(`/products/${ req.query.id }`).get()

	console.log(`id match: ${ req.query.id === productDetails.id }`)
	console.log(productDetails.data())


	return res.status(200).json({ id: productDetails.id, ...productDetails.data() })
}
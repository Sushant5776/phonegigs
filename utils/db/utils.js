import * as admin from 'firebase-admin'

const serviceAccount = require('./phonegigs-firebase-adminsdk.json')

const adminDBApp = !admin.apps.length
	? admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
	})
	: admin.app()

export {adminDBApp}
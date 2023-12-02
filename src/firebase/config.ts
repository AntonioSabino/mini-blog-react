import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyBHFQPAGBgBq02ubJmrVV11ugBum9rGgyk',
	authDomain: 'mini-blog-91e39.firebaseapp.com',
	projectId: 'mini-blog-91e39',
	storageBucket: 'mini-blog-91e39.appspot.com',
	messagingSenderId: '228619554385',
	appId: '1:228619554385:web:b7c01c6c965d5896583270',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { app, db }

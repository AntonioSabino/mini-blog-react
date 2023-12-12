import { DocumentData, doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import { FirebaseError } from 'firebase/app'

export const useFetchDocument = (docCollection: string, id: string) => {
	const [document, setDocument] = useState<DocumentData>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const [cancelled, setCancelled] = useState(false)

	useEffect(() => {
		async function fetchDocument() {
			if (cancelled) return

			setLoading(true)

			try {
				const docRef = doc(db, docCollection, id)
				const docSnap = await getDoc(docRef)

				if (docSnap.exists()) {
					setDocument(docSnap.data())
				} else {
					setError('Document not found')
				}
			} catch (error) {
				if (error instanceof FirebaseError) {
					setError(error.message)
				}
			} finally {
				setLoading(false)
			}
		}

		fetchDocument()
	}, [docCollection, id, cancelled])

	useEffect(() => {
		return () => {
			setCancelled(true)
		}
	}, [])

	return { document, loading, error }
}

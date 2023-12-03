import {
	DocumentData,
	collection,
	onSnapshot,
	orderBy,
	query,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import { FirebaseError } from 'firebase/app'

export const useFetchDocuments = (
	docCollection: string,
	searchQuery?: string,
	uid?: string
) => {
	const [documents, setDocuments] = useState<DocumentData[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const [cancelled, setCancelled] = useState(false)

	useEffect(() => {
		async function fetchDocuments() {
			if (cancelled) return

			setLoading(true)

			const collectionRef = collection(db, docCollection)

			try {
				const q = query(collectionRef, orderBy('createdAt', 'desc'))

				onSnapshot(q, (snapshot) => {
					const docs = snapshot.docs.map((doc) => ({
						...doc.data(),
						id: doc.id,
					}))

					setDocuments(docs)
				})
			} catch (error: unknown) {
				if (error instanceof FirebaseError) {
					setError(error.message)
				}
			} finally {
				setLoading(false)
			}
		}

		fetchDocuments()
	}, [docCollection, searchQuery, uid, cancelled])

	useEffect(() => {
		return () => {
			setCancelled(true)
		}
	}, [])

	return { documents, loading, error }
}

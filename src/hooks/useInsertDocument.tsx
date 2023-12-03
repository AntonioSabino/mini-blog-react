import {
	DocumentData,
	DocumentReference,
	Timestamp,
	addDoc,
	collection,
} from 'firebase/firestore'
import { useEffect, useReducer, useState } from 'react'
import { db } from '../firebase/config'
import { FirebaseError } from 'firebase/app'

interface InsertState {
	loading: boolean | null
	error: string | null
}

type InsertAction =
	| { type: 'LOADING' }
	| { type: 'SUCCESS'; payload: DocumentReference<DocumentData> }
	| { type: 'ERROR'; payload: string }

const initialState = {
	loading: null,
	error: null,
}

const insertReducer = (state: InsertState, action: InsertAction) => {
	switch (action.type) {
		case 'LOADING':
			return { ...state, loading: true, error: null }
		case 'SUCCESS':
			return { ...state, loading: false, error: null }
		case 'ERROR':
			return { ...state, loading: false, error: action.payload }
		default:
			return state
	}
}

export const useInsertDocument = (docCollection: string) => {
	const [response, dispatch] = useReducer(insertReducer, initialState)

	const [cancelled, setCancelled] = useState(false)

	const checkCancelBeforeDispatch = (action: InsertAction) => {
		if (!cancelled) {
			dispatch(action)
		}
	}

	const insertDocument = async (doc: DocumentData) => {
		checkCancelBeforeDispatch({ type: 'LOADING' })

		try {
			const newDoc = { ...doc, createdAt: Timestamp.now() }

			const insertedDoc = await addDoc(collection(db, docCollection), newDoc)

			checkCancelBeforeDispatch({ type: 'SUCCESS', payload: insertedDoc })
		} catch (error: unknown) {
			if (error instanceof FirebaseError) {
				checkCancelBeforeDispatch({ type: 'ERROR', payload: error.message })
			}
		}
	}

	useEffect(() => {
		return () => {
			setCancelled(true)
		}
	}, [])

	return { insertDocument, response }
}

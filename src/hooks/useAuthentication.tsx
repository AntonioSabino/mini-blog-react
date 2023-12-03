import { auth } from '../firebase/config'

import {
	createUserWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth'
import { useState, useEffect } from 'react'
import { CreateUser } from '../interfaces/user.interface'
import { FirebaseError } from 'firebase/app'

export const useAuthentication = () => {
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	// cleanup
	// deal with memory leaks
	const [cancelled, setCancelled] = useState(false)

	function checkIfCancelled() {
		if (cancelled) {
			return
		}
	}

	const createUser = async (data: CreateUser) => {
		checkIfCancelled()

		setLoading(true)
		setError('')

		try {
			const { user } = await createUserWithEmailAndPassword(
				auth,
				data.email,
				data.password
			)

			await updateProfile(user, {
				displayName: data.displayName,
			})

			return user
		} catch (error: unknown) {
			if (error instanceof FirebaseError) {
				console.log(error.message)
				console.log(typeof error.message)

				let systemErrorMessage

				switch (error.code) {
					case 'auth/email-already-in-use':
						systemErrorMessage = 'Email já está em uso'
						break
					case 'auth/invalid-email':
						systemErrorMessage = 'Email inválido'
						break
					case 'auth/weak-password':
						systemErrorMessage = 'Senha fraca'
						break
					default:
						systemErrorMessage = 'Erro desconhecido'
				}

				setError(systemErrorMessage)
			}
		} finally {
			setLoading(false)
		}
	}

	const logout = () => {
		checkIfCancelled()

		signOut(auth)
	}

	useEffect(() => {
		return () => {
			setCancelled(true)
		}
	}, [])

	return {
		auth,
		createUser,
		error,
		loading,
		logout,
	}
}

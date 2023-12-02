import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export function useAuthValue() {
	return useContext(AuthContext)
}

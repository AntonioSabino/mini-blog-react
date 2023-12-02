import { User } from 'firebase/auth'
import { createContext } from 'react'

export const AuthContext = createContext({} as User)

interface AuthProviderProps {
	children: React.ReactNode
	value: User
}

export function AuthProvider({ children, value }: AuthProviderProps) {
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

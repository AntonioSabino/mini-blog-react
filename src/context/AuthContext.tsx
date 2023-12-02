import { createContext } from 'react'

export const AuthContext = createContext({})

interface AuthProviderProps {
	children: React.ReactNode
	value: {
		[key: string]: unknown
	}
}

export function AuthProvider({ children, value }: AuthProviderProps) {
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

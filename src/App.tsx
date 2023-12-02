import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import { AuthProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

function App() {
	const { auth } = useAuthentication()
	const [user, setUser] = useState({})
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user)
			} else {
				setUser({})
			}

			setLoading(false)
		})
	}, [auth])

	if (loading) {
		return <h1>Carregando...</h1>
	}

	return (
		<AuthProvider value={user}>
			<BrowserRouter>
				<Header />
				<div className='container'>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='about'
							element={<About />}
						/>
						<Route
							path='login'
							element={<Login />}
						/>
						<Route
							path='register'
							element={<Register />}
						/>
						<Route
							path='*'
							element={<h1>Not Found</h1>}
						/>
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</AuthProvider>
	)
}

export default App

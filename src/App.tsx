import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
	return (
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
						path='*'
						element={<h1>Not Found</h1>}
					/>
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	)
}

export default App

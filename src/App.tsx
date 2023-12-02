import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'

function App() {
	return (
		<BrowserRouter>
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
		</BrowserRouter>
	)
}

export default App

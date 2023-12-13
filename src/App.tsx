import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/services' element={<Services />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App

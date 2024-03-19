import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import AboutContact from './pages/AboutContact'
import LoginSignup from './pages/LoginSignup'
import Dash from './pages/Dash'
import Account from './pages/Account'

import Header from "./Components/GeneralComponents/Header"
import Footer from "./Components/GeneralComponents/Footer"

function App() {

	return (
		<Router>

			<Header />

			<Routes>

				<Route path='/' element={<Landing />} />
				<Route path='/aboutcontact' element={<AboutContact />} />
				<Route path='/login' element={<LoginSignup />} />
				<Route path='/dash' element={<Dash />} />
				<Route path='/account' element={<Account />} />

			</Routes>

			<Footer />

		</Router>
	)
}

export default App;
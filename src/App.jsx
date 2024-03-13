import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import LoginSignup from './pages/LoginSignup'
import Dash from './pages/Dash'
import Account from './pages/Account'

function App() {

	return (
		<Router>
			<Routes>

				<Route path='/' element={<Landing />} />
				<Route path='/login' element={<LoginSignup />} />
				<Route path='/dash' element={<Dash />} />
				<Route path='/account' element={<Account />} />
				
			</Routes>
		</Router>
	)
}

export default App;
import './../styles/style.scss'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
	<div className='mainSection'>
		<Router>
			<Routes>
				<Route exact path="/" element={<Dashboard />}/>
			</Routes>
		</Router>
	</div>
  )
}

export default App

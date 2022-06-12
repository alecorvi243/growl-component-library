import React from 'react'
import { Link } from 'react-router-dom'


function App() {

	return (
		<div className="App">
			<header className="App-header">
				<Link className="App-link" to="/other">
					Go to the Other component
        		</Link>
				<p>
					Edit <code>src/App.js</code> and save to reload.
        		</p>

			</header>
		</div>
	)
}

export default App;
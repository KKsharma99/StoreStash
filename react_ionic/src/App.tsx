import React, { Component, createContext, useReducer } from 'react'
import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'
import { IonApp } from '@ionic/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import AppContextProvider from './context/appContext'

class App extends Component {
	render() {
		return (
			<IonApp>
				<AppContextProvider>
					<Router>
						<Switch>
							<Route exact path="/" component={Login} />
							<Route path="/login" component={Login} />
							<Route path="/register" component={Register} />
							<Route path="/" component={Home} />
						</Switch>
					</Router>
				</AppContextProvider>
			</IonApp>
		)
	}
}

export default App
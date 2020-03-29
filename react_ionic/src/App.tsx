import React, { Component, createContext, useReducer, useEffect } from 'react'
import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'
import { IonApp } from '@ionic/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Confirmation from './components/Confirmation'
import Agreement from './components/Agreement'
import Listing from './components/Listing'
import { AppContext, initialState, reducer, ActionTypes } from './context/appContext'

const App: React.FC = () => {
	useEffect(() => {
		for (const key of Object.keys(initialState)) {
			if (localStorage.hasOwnProperty(key)) {
				if (typeof(initialState[key] === 'boolean' && localStorage[key] === 'false' || localStorage[key] === 'true')) {
					initialState[key] = localStorage[key] == 'true';
				} else {
					initialState[key] = localStorage[key];
				}
			}
		}
	});
	
	let [state, dispatch] = useReducer(reducer, initialState);

	return (
		<IonApp>
			<AppContext.Provider value={{ state, dispatch }}>
				<Router>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/listing" component={Listing} />
						<Route path="/confirmation" component={Confirmation} />
						<Route path="/agreement" component={Agreement} />
						<Route path="/" component={Home} />
					</Switch>
				</Router>
			</AppContext.Provider>
		</IonApp>
	)
}

export default App
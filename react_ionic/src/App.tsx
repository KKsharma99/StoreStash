import React, { Component, createContext, useReducer, useEffect } from 'react'
import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'
import { IonApp } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TabBar from './components/TabBar'
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
				if (typeof(initialState[key]) === 'boolean' && localStorage[key] === 'false' || localStorage[key] === 'true') {
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
				<IonReactRouter>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/agreement" component={Agreement} />
						<Route path="/" component={TabBar} />
					</Switch>
				</IonReactRouter>
			</AppContext.Provider>
		</IonApp>
	)
}

export default App
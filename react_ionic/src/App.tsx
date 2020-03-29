import React, { Component, createContext, useReducer } from 'react'
import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'
import { IonApp } from '@ionic/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import { AppContext, initialState, reducer } from './context/appContext'

const App: React.FC = () => {
	let [state, dispatch] = useReducer(reducer, initialState);

	return (
		<IonApp>
			<AppContext.Provider value={{ state, dispatch }}>
				<Router>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/" component={Home} />
					</Switch>
				</Router>
			</AppContext.Provider>
		</IonApp>
	)
}

export default App
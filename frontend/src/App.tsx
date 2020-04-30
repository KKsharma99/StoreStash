import React, { useReducer, useEffect } from 'react'
import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'
import { IonApp } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Switch, Route } from 'react-router-dom'
import TabBar from './pages/TabBar'
import Login from './pages/Login'
import Register from './pages/Register'
import Agreement from './pages/Agreement'
import { AppContext, initialState, reducer } from './context/appContext'
import './App.css'

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
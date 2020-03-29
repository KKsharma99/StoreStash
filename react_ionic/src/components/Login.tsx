import React, { Component, useState, useContext } from 'react'
import {
	IonApp,
	IonTabs,
	IonTabBar,
	IonTabButton,
	IonLabel,
	IonRouterOutlet,
	IonIcon,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonGrid,
	IonRow,
	IonCol,
	IonItem,
	IonInput,
	IonButton,
	IonImg,
	IonText,
} from '@ionic/react'

import { Route, RouteComponentProps } from 'react-router-dom'
import { IonPage } from '@ionic/react'
import Discover from './Discover'
import Register from './Register'
import wretch from 'wretch'
import { AppContext, ActionTypes } from '../context/appContext'

// Images
import logo from '../assets/img/logo.png';

const Login: React.SFC<RouteComponentProps> = (props) => {
	const { state, dispatch } = useContext(AppContext);
	const { email } = state;
	const [password, setPassword] = useState('');

	async function handleSubmit(e: MouseEvent) {
		let validationErr = false;
		if (!email.endsWith("@gatech.edu")) {
			validationErr = true;
			alert("Email must be a @gatech.edu address");
		}
		if (validationErr) {
			e.preventDefault();
		} else {
			// TODO: get authorization token
			await wretch('http://localhost:3001/api/login')
				.post({ email, password })
				.json(data => console.log(data))
				.catch(err => {
					console.log(err);
					e.preventDefault();
				});
		}
	}

	function setEmail(email: string) { dispatch({ type: ActionTypes.setEmail, email })
	}

	return (<>
		<IonContent class="ion-padding">
			<IonGrid>
				<IonRow>
					<IonCol align-self-center size-md="6" size-lg="5" size-xs="12" >
						<br></br>
						<br></br>
						<br></br>
						<IonImg src={logo} alt="logo"/>
					</IonCol>
				</IonRow>
				<IonRow justify-content-center>
					<IonCol align-self-center size-md="6" size-lg="5" size-xs="12">
						<br></br>
						<IonItem>
							<IonInput
								type="text"
								placeholder="Email"
								onIonChange={e => setEmail((e.target as HTMLInputElement).value)}
								required
							></IonInput>
						</IonItem>

						<IonItem>
							<IonInput
								type="password"
								placeholder="Password"
								value={password}
								onIonChange={e => setPassword((e.target as HTMLInputElement).value)}
								required
							></IonInput>
						</IonItem>
						<br></br>
						<IonButton
							color="warning"
							size="default"
							expand="block"
							href="/discover"
							onClick={handleSubmit}
							disabled={!email.endsWith('@gatech.edu')}
						>Login</IonButton>
						<IonButton color="light" size="small"  expand="block" href="/register">Create an Account</IonButton>
					</IonCol>
				</IonRow>
			</IonGrid>
		</IonContent>
	</>);
}

export default Login;

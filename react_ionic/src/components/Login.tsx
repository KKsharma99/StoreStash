import React, { Component, useState, useContext } from 'react'
import {
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
import { Link, RouteComponentProps } from 'react-router-dom'
import { AppContext, ActionTypes } from '../context/appContext'
import wretch from 'wretch';
import { InputChangeEventDetail } from "@ionic/core";

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
	function handleEmail(e: CustomEvent<InputChangeEventDetail>) {
		setEmail((e.target as HTMLInputElement).value);
	}
	function handlePassword(e: CustomEvent<InputChangeEventDetail>) {
		setPassword((e.target as HTMLInputElement).value);
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
								value={email}
								onIonChange={handleEmail}
								required
							></IonInput>
						</IonItem>

						<IonItem>
							<IonInput
								type="password"
								placeholder="Password"
								value={password}
								onIonChange={handlePassword}
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
						<Link to={{
							pathname: '/register',
						}} style={{ textDecoration: 'none' }}>
							<IonButton color="light" size="small"  expand="block" href="/register">Create an Account</IonButton>
						</Link>
					</IonCol>
				</IonRow>
			</IonGrid>
		</IonContent>
	</>);
}

export default Login;

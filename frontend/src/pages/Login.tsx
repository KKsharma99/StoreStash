import React, { Component, useState, useContext, MouseEvent } from 'react'
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
	IonPage,
} from '@ionic/react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { AppContext, ActionTypes } from '../context/appContext'
import { InputChangeEventDetail } from "@ionic/core";
import wretcher from '../wretcher';
import wretch from "wretch";

// Images
import logo from '../assets/img/logo.png';

const Login: React.SFC<RouteComponentProps> = (props) => {
	const { state, dispatch } = useContext(AppContext);
	const { email } = state;
	const [password, setPassword] = useState('');
	const [errorMsg, setErrorMsg] = useState('');

	async function handleSubmit(e: MouseEvent | any) {
		e.preventDefault();
		let validationErr = false;
		if (!email.endsWith("@gatech.edu")) {
			validationErr = true;
			setErrorMsg("Email must be a @gatech.edu address");
		}
		try {
			// TODO: get authorization token
			await wretcher
				.url('/api/login')
				.options({ credentials: "include", mode: "cors" })
				.post({ email, password })
				.json(data => {
					console.log(data);
					dispatch({ type: 'userId', userId: data._id });
					dispatch({ type: 'firstName', firstName: data.firstName });
					dispatch({ type: 'lastName', lastName: data.lastName });
					dispatch({ type: 'email', email: data.email });
					dispatch({ type: 'token', token: data.token });
					dispatch({ type: 'gravatar', gravatar: data.gravatar });
				});
			props.history.push('/discover');
		} catch (err) {
			console.log(err);
			setErrorMsg('Email and/or password incorrect');
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

	return (<IonPage>
		<IonContent class="ion-padding">
			<IonGrid>
				<IonRow>
					<IonCol align-self-center sizeMd="4" offsetMd="4" >
						<br />
						<br />
						<br />
						<IonImg src={logo} alt="StoreStash logo"/>
					</IonCol>
				</IonRow>
				<IonRow justify-content-center>
					<IonCol align-self-center sizeMd="4" offsetMd="4">
						<br />
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
						<p style={{ color: "red" }}>{errorMsg}</p>
						<IonButton
							color="warning"
							size="default"
							expand="block"
							href="/discover"
							onClick={handleSubmit}
							disabled={!email.endsWith('@gatech.edu') || password === ''}
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
	</IonPage>);
}

export default Login;

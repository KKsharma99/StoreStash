import React, { useState, useContext } from 'react'
import {
	IonContent,
	IonItem,
	IonRow,
	IonCol,
	IonImg,
	IonButton,
	IonInput,
	IonGrid,
	IonCheckbox
} from '@ionic/react'
import wretch from "wretch"
import logo from '../assets/img/logo.png';
import { AppContext, ActionTypes } from '../context/appContext';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

const Register: React.SFC<RouteComponentProps> = (props) => {
	const { state, dispatch } = useContext(AppContext);
	const { email, agreed } = state;
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');

	async function handleSubmit(e: MouseEvent) {
		let validationErr = false;
		if (!email.endsWith("@gatech.edu")) {
			validationErr = true;
			alert("Email must be a @gatech.edu address");
		}
		if (password1 !== password2) {
			validationErr = true;
			alert("Passwords don't match");
		}
		if (validationErr) {
			e.preventDefault();
		} else {
			// TODO: get authorization token
			await wretch('http://localhost:3001/api/users/new')
				.post({
					email: email,
					password: password1
				})
				.json(data => console.log(data))
				.catch(err => {
					console.log(err);
					e.preventDefault();
					if (err.code === 11000) {
						alert("Another user with that email already exists")
					}
				});
		}
	}

	function setEmail(email: string) {
		dispatch({
			type: ActionTypes.setEmail,
			email
		})
	}
	
	function setAgreed(agreed: boolean) {
		dispatch({
			type: ActionTypes.setAgreed,
			agreed
		})
	}

	return (<>
		<IonContent class="ion-padding">
			<IonGrid>
				<IonRow>
					<IonCol col-12 >
						<IonImg src={logo} alt="logo"/>
					</IonCol>
				</IonRow>
				<IonRow justify-content-center>
					<IonCol align-self-center size-md="6" size-lg="5" size-xs="12">
							<br></br>
							<IonItem>
								<IonInput
									type="email"
									placeholder="Gatech Email"
									value={email}
									onIonChange={e => setEmail((e.target as HTMLInputElement).value)}
									required
								></IonInput>
							</IonItem>
							<IonItem>
								<IonInput type="text" placeholder="First Name"></IonInput>
							</IonItem>
							<IonItem>
								<IonInput type="text" placeholder="Last Name"></IonInput>
							</IonItem>
							<IonItem>
								<IonInput
									type="password"
									placeholder="Password"
									value={password1}
									onIonChange={e => setPassword1((e.target as HTMLInputElement).value)}
									required
								></IonInput>
							</IonItem>

							<IonItem>
								<IonInput
									type="password"
									placeholder="Repeat Password"
									value={password2}
									onIonChange={e => setPassword2((e.target as HTMLInputElement).value)}
									required
								></IonInput>
							</IonItem>
						<br></br>
							<IonItem>
								<IonCheckbox
									slot="start"
									value="agree"
									checked={agreed}
									onIonChange={e => setAgreed(!agreed)}
								></IonCheckbox>
								Agree to Terms and Conditions
							</IonItem>
							<IonButton color="light" size="small"  expand="full" href="/agreement">Read Terms and Conditions</IonButton>
						<br></br>
						<br></br>

							<IonButton
								color="warning"
								size="default"
								href="/discover"
								expand="block"
								onClick={handleSubmit}
								disabled={!email.endsWith("@gatech.edu") || password1 !== password2 || password1 === ''}
							>Register</IonButton>

						<Link to={{
							pathname: '/login'
						}} style={{ textDecoration: 'none' }}>
							<IonButton color="light" size="small"  expand="block" href="/">or Login</IonButton>
						</Link>
					</IonCol>
				</IonRow>
			</IonGrid>
		</IonContent>

	</>)
}

export default Register;
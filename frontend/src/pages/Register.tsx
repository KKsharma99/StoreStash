import React, { useState, useContext, MouseEvent } from 'react'
import {
	IonContent,
	IonItem,
	IonRow,
	IonCol,
	IonImg,
	IonButton,
	IonInput,
	IonGrid,
	IonCheckbox,
	IonPage
} from '@ionic/react'
import wretcher from '../wretcher';
import logo from '../assets/img/logo.png';
import { AppContext, ActionTypes } from '../context/appContext';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

const Register: React.FC<RouteComponentProps> = (props) => {
	const { state, dispatch } = useContext(AppContext);
	// TODO: move email and agreed out of context and into state
	const { email, agreed } = state;
	const [phone, setPhone] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const handleSubmit = async (e: MouseEvent | any) => {
		e.preventDefault();
		let validationErr = false;
		if (!email.endsWith("@gatech.edu")) {
			validationErr = true;
			alert("Email must be a @gatech.edu address");
		}
		if (password1 !== password2) {
			validationErr = true;
			alert("Passwords don't match");
		}
		// TODO: get authorization token
		if (!validationErr) {
			try {
				await wretcher
					.url('/api/register')
					.post({
						email,
						password: password1,
						firstName,
						lastName,
						phone
					})
					.json(data => {
						console.log(data);
						dispatch({ type: 'userId', userId: data._id });
						dispatch({ type: 'firstName', firstName: data.firstName });
						dispatch({ type: 'lastName', lastName: data.lastName });
						dispatch({ type: 'email', email: data.email });
						dispatch({ type: 'phone', phone: data.phone });
						dispatch({ type: 'token', token: data.token });
						dispatch({ type: 'gravatar', gravatar: data.gravatar });
					});
				props.history.push('/discover')
			} catch (err) {
				console.log(err);
				if (err.code === 11000) {
					alert("Another user with that email already exists");
				}
			}
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

	return (<IonPage>
		<IonContent class="ion-padding">
			<IonGrid>
				<IonRow>
					<IonCol sizeMd="4" offsetMd="4" >
						<IonImg src={logo} alt="logo"/>
					</IonCol>
				</IonRow>
				<IonRow justify-content-center>
					<IonCol align-self-center sizeMd="4" offsetMd="4">
							<IonItem>
								{/* TODO: add HTML pattern to input to validate email ends with @gatech.edu */}
								<IonInput
									type="email"
									placeholder="Georgia Tech Email"
									value={email}
									onIonChange={e => setEmail((e.target as HTMLInputElement).value)}
									required
								/>
							</IonItem>
							<IonItem>
								<IonInput
									type="text"
									placeholder="First Name"
									value={firstName}
									onIonChange={e => setFirstName((e.target as HTMLInputElement).value)}
								/>
							</IonItem>
							<IonItem>
								<IonInput
									type="text"
									placeholder="Last Name"
									value={lastName}
									onIonChange={e => setLastName((e.target as HTMLInputElement).value)}
								/>
							</IonItem>
							<IonItem>
								<IonInput
									type="tel"
									placeholder="Phone Number"
									value={phone}
									onIonChange={e => setPhone((e.target as HTMLInputElement).value)}
									required
								/>
							</IonItem>
							<IonItem>
								<IonInput
									type="password"
									placeholder="Password"
									value={password1}
									onIonChange={e => setPassword1((e.target as HTMLInputElement).value)}
									required
								/>
							</IonItem>

							<IonItem>
								<IonInput
									type="password"
									placeholder="Repeat Password"
									value={password2}
									onIonChange={e => setPassword2((e.target as HTMLInputElement).value)}
									required
								/>
							</IonItem>

							<Link to={{ pathname: '/agreement' }} style={{ textDecoration: 'none' }}>
								<IonButton color="light" size="small"  expand="full" href="/agreement">Show Terms and Conditions</IonButton>
							</Link>
							<IonItem>
								<IonCheckbox
									slot="start"
									value="agree"
									checked={agreed}
									onIonChange={e => setAgreed(!agreed)}
								/>
								I agree to the terms and conditions
							</IonItem>
							<br />

							<IonButton
								color="warning"
								size="default"
								href="/discover"
								expand="block"
								onClick={handleSubmit}
								disabled={!email.endsWith("@gatech.edu") || password1 !== password2 || password1 === '' || agreed === false}
							>Register</IonButton>

						<Link to={{ pathname: '/login' }} style={{ textDecoration: 'none' }}>
							<IonButton color="light" size="small"  expand="block" href="/">or Login</IonButton>
						</Link>
					</IonCol>
				</IonRow>
			</IonGrid>
		</IonContent>

	</IonPage>)
}

export default Register;
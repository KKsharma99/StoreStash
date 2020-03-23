import React, { SyntheticEvent } from 'react'
import {
	IonContent,
	IonItem,
	IonRow,
	IonCol,
	IonImg,
	IonButton,
	IonInput,
	IonGrid,
	IonText

} from '@ionic/react'
import { Link } from 'react-router-dom'
import wretch from "wretch"

import logo from '../assets/img/logo.png';

// @ts-nocheck

export default class Register extends React.Component<{}, { email: string, password1: string, password2: string }> {
	constructor(props: any) {
		super(props);
		this.state = {
			email: "",
			password1: "",
			password2: "",
		};
	}

	handleSubmit = async (e: MouseEvent) => {
		let validationErr = false;
		if (!this.state.email.endsWith("@gatech.edu")) {
			validationErr = true;
			alert("Email be a @gatech.edu address");
		}
		if (this.state.password1 !== this.state.password2) {
			validationErr = true;
			alert("Passwords don't match");
		}
		if (validationErr) {
			e.preventDefault();
		} else {
			await wretch('http://localhost:3001/api/users/new')
				.post({
					email: this.state.email,
					password: this.state.password1
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

	render() {
		return (<>

			<IonContent class="ion-padding">
				<IonGrid>
					<IonRow>
						<IonCol col-12 >
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
										type="email"
										placeholder="Gatech Email"
										value={this.state.email}
										onIonChange={e => this.setState({ email: (e.target as HTMLInputElement).value })}
										required
									></IonInput>
								</IonItem>

								<IonItem>
									<IonInput
										type="password"
										placeholder="Password"
										value={this.state.password1}
										onIonChange={e => this.setState({ password1: (e.target as HTMLInputElement).value })}
										required
									></IonInput>
								</IonItem>

								<IonItem>
									<IonInput
										type="password"
										placeholder="Repeat Password"
										value={this.state.password2}
										onIonChange={e => this.setState({ password2: (e.target as HTMLInputElement).value })}
										required
									></IonInput>
								</IonItem>
							<br></br>
								<IonButton
									color="warning"
									size="default"
									href="/discover"
									expand="block"
									onClick={e => this.handleSubmit(e)}
									disabled={!this.state.email.endsWith("@gatech.edu") || this.state.password1 !== this.state.password2 || this.state.password1 === ''}
								>Register</IonButton>
							<IonButton color="light" size="small"  expand="block" href="/">or Login</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>

		</>)
	}
}
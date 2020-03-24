import React from 'react'
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
import { Link } from 'react-router-dom'
import axios from "axios"
import qs from "qs"

import logo from '../assets/img/logo.png';

export default class Register extends React.Component {
	render() {
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
									<IonInput type="email" placeholder="Gatech Email"></IonInput>
								</IonItem>
								<IonItem>
									<IonInput type="text" placeholder="First Name"></IonInput>
								</IonItem>
								<IonItem>
									<IonInput type="text" placeholder="Last Name"></IonInput>
								</IonItem>
								<IonItem>
									<IonInput type="password" placeholder="Password"></IonInput>
								</IonItem>

								<IonItem>
									<IonInput type="password" placeholder="Repeat Password"></IonInput>
								</IonItem>
							<br></br>
								<IonItem>
									<IonCheckbox slot="start" value="agree"></IonCheckbox>
									Agree to Terms and Conditions
								</IonItem>
								<IonButton color="light" size="small"  expand="full" href="/agreement">Read Terms and Conditions</IonButton>
							<br></br>
							<br></br>
								<IonButton color="warning" size="default" href="/discover" expand="block" onClick={async () =>
									// {axios.post(
									// 	"https://storestash.herokuapp.com/api/users/new", 
									// 	qs.stringify({ email: 'sarahshadid@gatech.edu', password: '3iqiruituhfd' }),
									// 	{ headers: { "Content-Type": "application/x-www-form-urlencoded" } }
									// ); console.log("clicked!")}
									await axios({
										method: 'POST',
										url: 'https://storestash.herokuapp.com/api/users/new',
										// data: qs.stringify({
										// 	email: 'sarahshadid@gatech.edu',
										// 	password: 'Yes we talked to users'
										// }),
										headers: {
											'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
										}
									})
								}>Register</IonButton>
							<IonButton color="light" size="small"  expand="block" href="/">or Login</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>

		</>)
	}
}
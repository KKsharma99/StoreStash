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
	IonText

} from '@ionic/react'
import { Link } from 'react-router-dom'
import wretch from "wretch"

import logo from '../assets/img/logo.png';

export default class Register extends React.Component {
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
									<IonInput type="email" placeholder="Gatech Email"></IonInput>
								</IonItem>

								<IonItem>
									<IonInput type="password" placeholder="Password"></IonInput>
								</IonItem>

								<IonItem>
									<IonInput type="password" placeholder="Repeat Password"></IonInput>
								</IonItem>
							<br></br>
								<IonButton color="warning" size="default" href="/discover" expand="block" onClick={async () =>
									wretch('http://localhost:3001/api/users/new')
										.post({
											email: 'sarahshadid@gatech.edu',
											password: 'Yes we talked to users'
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
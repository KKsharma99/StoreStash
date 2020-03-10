import React, { Component } from 'react'
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

import { Route } from 'react-router-dom'
import { IonPage } from '@ionic/react'
import Discover from './Discover'
import Profile from './Profile'
import Register from './Register'
import Listing from './Listing'
import Confirmation from './Confirmation'

// Images
import logo from '../assets/img/logo.png';

class Login extends Component {
	render() {
		return (
			<IonApp>
				<IonPage>

					<IonContent class="ion-padding">
						
						<IonRouterOutlet>
							<Route exact path="/discover" component={Discover}/>
							<Route exact path="/register" component={Register}/>
						</IonRouterOutlet>
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
										<IonInput type="text" placeholder="Username"></IonInput>
									</IonItem>

									<IonItem>
										<IonInput type="password" placeholder="Password"></IonInput>
									</IonItem>
									<br></br>
									<IonButton color="warning" size="default" expand="block" href="/discover">Login</IonButton>
									<IonButton color="light" size="small"  expand="block" href="/register">Create an Account</IonButton>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonContent>
				</IonPage>
			</IonApp>
		);
	}
}

export default Login;

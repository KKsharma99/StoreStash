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
							<IonInput type="text" placeholder="Username"></IonInput>
						</IonItem>

						<IonItem>
							<IonInput type="password" placeholder="Password"></IonInput>
						</IonItem>
						<br></br>
						<IonButton color="warning" size="default" expand="block" href="/discover" onClick={() => alert("hey")}>Login</IonButton>
						<IonButton color="light" size="small"  expand="block" href="/register">Create an Account</IonButton>
					</IonCol>
				</IonRow>
			</IonGrid>
		</IonContent>
	</>);
}

export default Login;

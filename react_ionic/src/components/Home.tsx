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
	IonText
} from '@ionic/react'
import { Route, Link } from 'react-router-dom'
import { IonPage } from '@ionic/react'
import Discover from './Discover'
import Profile from './Profile'
import Register from './Register'
import Listing from './Listing'
import Confirmation from './Confirmation'
import Login from './Login'

class Home extends Component {
	render() {
		return (
			<IonApp>
				<IonPage>

					<IonTabs>
						<IonRouterOutlet>
							<Route path="/" component={Login} exact />
							<Route path="/:tab(discover)" component={Discover} exact />
							<Route path="/:tab(profile)" component={Profile} exact />
							<Route path="/:tab(register)" component={Register} exact />
							<Route path="/:tab(listing)" component={Listing} exact />
							<Route path="/:tab(confirmation)" component={Confirmation} exact />
						</IonRouterOutlet>

						<IonTabBar slot="bottom">
							<IonTabButton tab="home" href="/discover">
								<IonIcon name="search" />
								<IonLabel>Discover</IonLabel>
							</IonTabButton>
							<IonTabButton tab="settings" href="/profile">
								<IonIcon name="person" />
								<IonLabel>Profile</IonLabel>
							</IonTabButton>

						</IonTabBar>
					</IonTabs>
				</IonPage>
			</IonApp>
		);
	}
}

export default Home

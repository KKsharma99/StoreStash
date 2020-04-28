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
import Post from './Post'
import Agreement from './Agreement'

class TabBar extends Component {
	render() {
		return (

					<IonTabs>
						<IonRouterOutlet>
							<Route path="/discover" component={Discover} exact />
							<Route path="/profile" component={Profile} exact />
							<Route path="/listing" component={Listing} />
							<Route path="/confirmation" component={Confirmation} exact />
							<Route path="/post" component={Post} exact />
						</IonRouterOutlet>

						<IonTabBar slot="bottom">
							<IonTabButton tab="home" href="/discover">
								<IonIcon icon="search" />
								<IonLabel>Discover</IonLabel>
							</IonTabButton>
							<IonTabButton tab="settings" href="/profile">
								<IonIcon icon="person" />
								<IonLabel>Profile</IonLabel>
							</IonTabButton>

						</IonTabBar>
					</IonTabs>
		);
	}
}

export default TabBar;
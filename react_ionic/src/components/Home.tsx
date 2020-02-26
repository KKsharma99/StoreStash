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

class Home extends Component {
	render() {
		return (
			<IonApp>
				<IonPage>

					<IonContent class="ion-padding">
						<IonGrid>
							<IonRow>
								<IonCol col-12 >
									<br></br>
									<br></br>
									<br></br>
									<IonImg src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.15752-0/p280x280/87410422_218144796034626_6427845418083680256_n.png?_nc_cat=108&_nc_ohc=a-TqTLyCU6QAX9r2qH9&_nc_ht=scontent-ort2-1.xx&oh=8cfd31078edaf06e989de12132ebd9ca&oe=5F004821"/>
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
									<IonItem>
										<IonButton color="warning" size="default" href="/touchid" expand="block">Login</IonButton>
										<IonButton color="warning" size="default" href="/register">Register</IonButton>
									</IonItem>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonContent>

					<IonTabs>
						<IonRouterOutlet>
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

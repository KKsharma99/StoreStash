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
import { Route } from 'react-router-dom'
import { IonPage } from '@ionic/react'
import Tab1 from '../Tab1'
import Tab2 from '../Tab2'
import Tab3 from '../Tab3'
import Tab4 from '../Tab4'
import Tab5 from '../Tab5'

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
									<br></br>
									<IonButton color="warning" size="default" href="/touchid" expand="block">Login</IonButton>
									<br></br>
									
									<p>Don't have an account? <IonText color="primary"><u>Register</u></IonText></p>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonContent>

					<IonTabs>
						<IonRouterOutlet>
							<Route path="/:tab(tab1)" component={Tab1} exact />
							<Route path="/:tab(tab2)" component={Tab2} exact />
							<Route path="/:tab(tab3)" component={Tab3} exact />
							<Route path="/:tab(tab4)" component={Tab4} exact />
							<Route path="/:tab(tab5)" component={Tab5} exact />
						</IonRouterOutlet>

						<IonTabBar slot="bottom">
							<IonTabButton tab="home" href="/tab1">
								<IonIcon name="search" />
								<IonLabel>Discover</IonLabel>
							</IonTabButton>
							<IonTabButton tab="settings" href="/tab2">
								<IonIcon name="person" />
								<IonLabel>Profile</IonLabel>
							</IonTabButton>
							<IonTabButton tab="register" href="/tab3">
								<IonIcon name="information-circle" />
								<IonLabel>Register</IonLabel>
							</IonTabButton>

							<IonTabButton tab="single-item" href="/tab4">
								<IonIcon name="information-circle" />
								<IonLabel>Item</IonLabel>
							</IonTabButton>

							<IonTabButton tab="confirmation" href="/tab5">
								<IonIcon name="information-circle" />
								<IonLabel>Confirmation</IonLabel>
							</IonTabButton>
						</IonTabBar>
					</IonTabs>
				</IonPage>
			</IonApp>
		);
	}
}

export default Home

// uers = node.js.getMongodb("QUERY")
// for i in Users: 
// 	print(<h1> %Users[Name]%</h1>)

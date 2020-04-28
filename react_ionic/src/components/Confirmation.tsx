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
	IonHeader,
	IonToolbar,
	IonButtons,
	IonMenuButton,
	IonTitle,
	IonPage

} from '@ionic/react'

export default class Confirmation extends React.Component {
	render() {
		return (<IonPage>


			<IonHeader>
				<IonToolbar color="warning">
					<IonButtons slot="start">
						<IonMenuButton></IonMenuButton>
					</IonButtons>
					<IonTitle>Confirmation</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent class="ion-padding">
				<IonGrid>
					<IonRow>
						<IonCol col-12 text-center>
							<h1>Order Placed!</h1>
							<p>You can see your order details in the profile tab. Thank you for using StoreStash.</p>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>

		</IonPage>)
	}
}
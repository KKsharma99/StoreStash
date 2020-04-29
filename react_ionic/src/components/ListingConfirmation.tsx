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

export default class ListingConfirmation extends React.Component {
	render() {
		return (<IonPage>


			<IonHeader>
				<IonToolbar color="warning">
					<IonButtons slot="start">
						<IonMenuButton></IonMenuButton>
					</IonButtons>
					<IonTitle>Listing Confirmation</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent class="ion-padding">
				<IonGrid>
					<IonRow>
						<IonCol sizeMd="4" offsetMd="4">
							<h1>Listing Posted!</h1>
							<p>Your listing has been posted. You can find your listing in your profile. Thank you for using StoreStash.</p>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>

		</IonPage>)
	}
}
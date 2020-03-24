import React from 'react'
import {
	IonContent,
	IonRow,
	IonCol,
	IonGrid,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonMenuButton,
	IonTitle,
	IonImg,
	IonButton,
	IonIcon

} from '@ionic/react'

// Import Images
import tc_1 from '../assets/img/tc/tc_1.png';
import tc_2 from '../assets/img/tc/tc_2.png';
import tc_3 from '../assets/img/tc/tc_3.png';
import tc_4 from '../assets/img/tc/tc_4.png';



export default class Agreement extends React.Component {
	render() {
		return (<>

			<IonHeader>
				<IonToolbar color="warning">
					<IonButtons slot="start">
						<IonMenuButton></IonMenuButton>
					</IonButtons>
					<IonTitle>Terms and Conditions</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent class="ion-padding">
				<IonGrid>
					<IonRow justify-content-center>
						<IonCol align-self-center size-md="12" size-lg="12" size-xs="12">
							<IonButton color="primary" size="small" href="/register" expand="full">
								<IonIcon slot="start" name="arrow-back"/>
								Back to Registration
							</IonButton>
							<IonImg src={tc_1} alt="tc_1"/>
							<IonImg src={tc_2} alt="tc_2"/>
							<IonImg src={tc_3} alt="tc_3"/>
							<IonImg src={tc_4} alt="tc_4"/>
							<IonButton color="primary" size="small" href="/register" expand="full">
								<IonIcon slot="start" name="arrow-back"/>
								Back to Registration
							</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>

		</>)
	}
}
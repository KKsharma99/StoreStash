import React from 'react'
import {
	IonContent,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonMenuButton,
	IonTitle,
	IonIcon,
	IonList,
	IonSelectOption,
	IonSelect,
	IonItem,
	IonLabel,
	IonDatetime,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonRow,
	IonCol,
	IonImg,
	IonButton,
	IonText,
	IonGrid,
	IonInput

} from '@ionic/react'

export default class Listing extends React.Component {
	render() {
		return (<>

			<IonHeader>
				<IonToolbar color="warning">
					<IonButtons slot="start">
						<IonMenuButton></IonMenuButton>
					</IonButtons>
					<IonTitle>Complete Your Order</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent>
				<IonGrid>
					<IonRow>
						<IonCol col-12 text-center>
							<h2>Listing Details</h2>
						</IonCol>
					</IonRow>
				</IonGrid>

				<IonCard>
					<IonItem>
						<IonRow>
							<IonCol col-12>
								<IonCardTitle color="success">$55/mo</IonCardTitle>
								<IonCardSubtitle><IonIcon name="pin"></IonIcon>4 Miles </IonCardSubtitle>
								<IonCardSubtitle><IonIcon name="cube"></IonIcon> 3 Boxes</IonCardSubtitle>
								<IonCardSubtitle><IonIcon name="person"></IonIcon> Savanah Smith</IonCardSubtitle>
							</IonCol>
						</IonRow>
					</IonItem>

					<IonCardContent class="ion-no-padding">
						<IonRow>
							<IonCol col-12 >
								<IonImg src="https://image.advance.net/home/adv-media/width380/img/home_ideas/photo/2016/07/19/empty-interior-with-single-column-in-the-center-8b3f359e84b27f53.jpg"/>
								<p>Space Available: Mar 3, 2019 - Aug 8, 2019</p>
							</IonCol>
							
						</IonRow>
					</IonCardContent>
				</IonCard>

				<IonGrid>
					<IonRow>
						<IonCol col-12 text-center>
							<h2>Order Details</h2>
						</IonCol>
					</IonRow>
				
					<IonList lines="none">
						<IonRow>
							<IonCol col-12 >
								<IonItem>
									<IonIcon name="calendar" slot="start"></IonIcon>
									<IonLabel>Drop off</IonLabel>
									<IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={null}></IonDatetime>
								</IonItem>
							</IonCol>
							<IonCol col-12 >
								<IonItem>
									<IonIcon name="calendar" slot="start"></IonIcon>
									<IonLabel>Pick up</IonLabel>
									<IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={null}></IonDatetime>
								</IonItem>
							</IonCol>
						</IonRow>

						<IonRow>
							<IonCol col-12 >
								<IonItem>
									<IonIcon name="cube" slot="start"></IonIcon>
									<IonLabel>Box Count</IonLabel>
									<IonSelect>
										<IonSelectOption value="1" selected>1</IonSelectOption>
										<IonSelectOption value="2">2</IonSelectOption>
										<IonSelectOption value="3">3</IonSelectOption>
									</IonSelect>
								</IonItem>
							</IonCol>
						</IonRow>


						<IonRow>
							<IonCol col-12 >
								<IonItem>
									<IonInput type="text" placeholder="Enter Phone Number"></IonInput>
								</IonItem>
							</IonCol>
						</IonRow>

						<IonRow>
							<IonCol col-12 text-center>
								<p><b>Order Total: </b><IonText color="success"><b>$45</b></IonText></p>
							</IonCol>
						</IonRow>

						<IonRow>
							<IonCol col-12 >
								
									<IonButton color="warning" size="default" expand="full" href="/confirmation">
										<IonIcon name="card" slot="start"></IonIcon>Pay and Confirm
									</IonButton>
								
							</IonCol>
						</IonRow>
					</IonList>

				</IonGrid>
			</IonContent>

		</>)
	}
}
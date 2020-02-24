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
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonRow,
	IonCol,
	IonImg

} from '@ionic/react'


export default class Tab1 extends React.Component {
	render() {
		return (<>
			<IonHeader>
				<IonToolbar color="warning">
					<IonButtons slot="start">
						<IonMenuButton></IonMenuButton>
					</IonButtons>
					<IonTitle>Discover</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent>
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
									<IonLabel>Box Capacity</IonLabel>
									<IonSelect>
										<IonSelectOption value="1" selected>1</IonSelectOption>
										<IonSelectOption value="2">2</IonSelectOption>
										<IonSelectOption value="3">3</IonSelectOption>
										<IonSelectOption value="4">4</IonSelectOption>
										<IonSelectOption value="5">5</IonSelectOption>
										<IonSelectOption value="6">6</IonSelectOption>
									</IonSelect>
								</IonItem>
							</IonCol>
						</IonRow>

						<IonRow>
							<IonCol col-12 >
								<IonItem>
									<IonIcon name="cash" slot="start"></IonIcon>
									<IonLabel>Max Price</IonLabel>
									<IonSelect>
										<IonSelectOption value="20" selected>$20</IonSelectOption>
										<IonSelectOption value="40">$40</IonSelectOption>
										<IonSelectOption value="75">$75</IonSelectOption>
										<IonSelectOption value="100">$100</IonSelectOption>
									</IonSelect>
								</IonItem>
							</IonCol>
						</IonRow>

					</IonList>

					<IonItem>
							<IonLabel><b>7</b> available listings.</IonLabel>
					</IonItem>

					<IonCard>
						<IonItem>
							<IonRow>
								<IonCol col-12>
									<IonCardTitle color="success">$23/mo</IonCardTitle>
									<IonCardSubtitle><IonIcon name="pin"></IonIcon>1.3 Miles </IonCardSubtitle>
									<IonCardSubtitle><IonIcon name="cube"></IonIcon> 3 Boxes</IonCardSubtitle>
								</IonCol>
							</IonRow>
						</IonItem>

						<IonCardContent class="ion-no-padding">
							<IonRow>
								<IonCol col-12 >
									<IonImg src="https://i.pinimg.com/originals/45/b1/8a/45b18a308803550d9ebba984b96c8892.jpg"/>
									
									<IonButton expand="full" color="warning" size="small"><IonIcon name="calendar" slot="start"></IonIcon>BOOK</IonButton>
								</IonCol>
							</IonRow>
						</IonCardContent>
					</IonCard>

					<IonCard>
						<IonItem>
							<IonRow>
								<IonCol col-12>
									<IonCardTitle color="success">$43/mo</IonCardTitle>
									<IonCardSubtitle><IonIcon name="pin"></IonIcon>5.3 Miles </IonCardSubtitle>
									<IonCardSubtitle><IonIcon name="cube"></IonIcon> 4 Boxes</IonCardSubtitle>
								</IonCol>
							</IonRow>
						</IonItem>

						<IonCardContent class="ion-no-padding">
							<IonRow>
								<IonCol col-12 >
									<IonImg src="https://i.pinimg.com/originals/45/b1/8a/45b18a308803550d9ebba984b96c8892.jpg"/>
									
									<IonButton expand="full" color="warning" size="small"><IonIcon name="calendar" slot="start"></IonIcon>BOOK</IonButton>
								</IonCol>
							</IonRow>
						</IonCardContent>
					</IonCard>

					<IonCard>
						<IonItem>
							<IonRow>
								<IonCol col-12>
									<IonCardTitle color="success">$33/mo</IonCardTitle>
									<IonCardSubtitle><IonIcon name="pin"></IonIcon>5.3 Miles </IonCardSubtitle>
									<IonCardSubtitle><IonIcon name="cube"></IonIcon> 2 Boxes</IonCardSubtitle>
								</IonCol>
							</IonRow>
						</IonItem>

						<IonCardContent class="ion-no-padding">
							<IonRow>
								<IonCol col-12 >
									<IonImg src="https://i.pinimg.com/originals/45/b1/8a/45b18a308803550d9ebba984b96c8892.jpg"/>
									
									<IonButton expand="full" color="warning" size="small"><IonIcon name="calendar" slot="start"></IonIcon>BOOK</IonButton>
								</IonCol>
							</IonRow>
						</IonCardContent>
					</IonCard>

					<IonCard>
						<IonItem>
							<IonRow>
								<IonCol col-12>
									<IonCardTitle color="success">$19/mo</IonCardTitle>
									<IonCardSubtitle><IonIcon name="pin"></IonIcon>7.4 Miles </IonCardSubtitle>
									<IonCardSubtitle><IonIcon name="cube"></IonIcon> 1 Boxes</IonCardSubtitle>
								</IonCol>
							</IonRow>
						</IonItem>

						<IonCardContent class="ion-no-padding">
							<IonRow>
								<IonCol col-12 >
									<IonImg src="https://image.advance.net/home/adv-media/width380/img/home_ideas/photo/2016/07/19/empty-interior-with-single-column-in-the-center-8b3f359e84b27f53.jpg"/>
									
									<IonButton expand="full" color="warning" size="small"><IonIcon name="calendar" slot="start"></IonIcon>BOOK</IonButton>
								</IonCol>
							</IonRow>
						</IonCardContent>
					</IonCard>

					<IonCard>
						<IonItem>
							<IonRow>
								<IonCol col-12>
									<IonCardTitle color="success">$55/mo</IonCardTitle>
									<IonCardSubtitle><IonIcon name="pin"></IonIcon>4 Miles </IonCardSubtitle>
									<IonCardSubtitle><IonIcon name="cube"></IonIcon> 3 Boxes</IonCardSubtitle>
								</IonCol>
							</IonRow>
						</IonItem>

						<IonCardContent class="ion-no-padding">
							<IonRow>
								<IonCol col-12 >
									<IonImg src="https://image.advance.net/home/adv-media/width380/img/home_ideas/photo/2016/07/19/empty-interior-with-single-column-in-the-center-8b3f359e84b27f53.jpg"/>
									
									<IonButton expand="full" color="warning" size="small"><IonIcon name="calendar" slot="start"></IonIcon>BOOK</IonButton>
								</IonCol>
							</IonRow>
						</IonCardContent>
					</IonCard>
			</IonContent>
		</>)
	}
}
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
	IonImg,
	IonGrid

} from '@ionic/react'

// Import Images
import room_1 from '../../assets/img/room_1.png';
import room_2 from '../../assets/img/room_2.png';
import room_3 from '../../assets/img/room_3.png';



export default class Discover extends React.Component {
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
							<IonCol col-12 text-center>
								<h1>Filter</h1>
							</IonCol>
						</IonRow>
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
									<IonLabel>Boxes</IonLabel>
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
									<IonLabel>Max Price per Box</IonLabel>
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

					<IonRow>
						<IonCol col-12 text-center>
							<h1><b>7</b> Listings</h1>
							<p>Listed prices are monthly per box.</p>
						</IonCol>
					</IonRow>

					<IonCard>
						<IonItem>
							<IonRow>
								<IonCol col-12>
									<IonCardTitle color="success">$23/mo</IonCardTitle>
									<IonCardSubtitle><IonIcon name="pin"></IonIcon>1.3 Miles </IonCardSubtitle>
									<IonCardSubtitle><IonIcon name="cube"></IonIcon> 3 Boxes</IonCardSubtitle>
									<IonCardSubtitle><IonIcon name="person"></IonIcon> Savanah Smith</IonCardSubtitle>
								</IonCol>
							</IonRow>
						</IonItem>

						<IonCardContent class="ion-no-padding">
							<IonRow>
								<IonCol col-12 >
									<IonImg src={room_1} alt="logo"/>
									<p>Space Available: Mar 3, 2019 - Aug 8, 2019</p>
									
									<IonButton expand="full" color="warning" size="default" href="/listing">
										<IonIcon name="calendar" slot="start"></IonIcon>BOOK
									</IonButton>
								</IonCol>
							</IonRow>
						</IonCardContent>
					</IonCard>

					<IonCard>
						<IonItem>
							<IonGrid>
								<IonRow>
									<IonCol col-6>
										<IonCardTitle color="success">$43/mo</IonCardTitle>
										<IonCardSubtitle><IonIcon name="pin"></IonIcon>5.3 Miles </IonCardSubtitle>
										<IonCardSubtitle><IonIcon name="cube"></IonIcon> 4 Boxes</IonCardSubtitle>
										<IonCardSubtitle><IonIcon name="person"></IonIcon> Charles Smith</IonCardSubtitle>
									</IonCol>
								</IonRow>
							</IonGrid>
						</IonItem>

						<IonCardContent class="ion-no-padding">
							<IonRow>
								<IonCol col-12 >
									<IonImg src={room_2}/>
									<p>Space Available: Mar 3, 2019 - Aug 8, 2019</p>
									<IonButton expand="full" color="warning" size="default" href="/listing">
										<IonIcon name="calendar" slot="start"></IonIcon>BOOK
									</IonButton>
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
									<IonCardSubtitle><IonIcon name="person"></IonIcon> James Smith</IonCardSubtitle>
								</IonCol>
							</IonRow>
						</IonItem>

						<IonCardContent class="ion-no-padding">
							<IonRow>
								<IonCol col-12 >
									<IonImg src={room_1}/>
									<p>Space Available: Mar 3, 2019 - Aug 8, 2019</p>
									
									<IonButton expand="full" color="warning" size="default" href="/listing">
										<IonIcon name="calendar" slot="start"></IonIcon>BOOK
									</IonButton>
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
									<IonCardSubtitle><IonIcon name="person"></IonIcon> Indie Smith</IonCardSubtitle>
								</IonCol>
							</IonRow>
						</IonItem>

						<IonCardContent class="ion-no-padding">
							<IonRow>
								<IonCol col-12 >
									<IonImg src={room_2}/>
									<p>Space Available: Mar 3, 2019 - Aug 8, 2019</p>
									<IonButton expand="full" color="warning" size="default" href="/listing">
										<IonIcon name="calendar" slot="start"></IonIcon>BOOK
									</IonButton>
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
									<IonCardSubtitle><IonIcon name="person"></IonIcon> Sarah Smith</IonCardSubtitle>
								</IonCol>
							</IonRow>
						</IonItem>

						<IonCardContent class="ion-no-padding">
							<IonRow>
								<IonCol col-12 >
									<IonImg src={room_3}/>
									<p>Space Available: Mar 3, 2019 - Aug 8, 2019</p>
									<IonButton expand="full" color="warning" size="default" href="/listing">
										<IonIcon name="calendar" slot="start"></IonIcon>BOOK
									</IonButton>
								</IonCol>
							</IonRow>
						</IonCardContent>
					</IonCard>
			</IonContent>
		</>)
	}
}
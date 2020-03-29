import React from 'react'
import { Link } from 'react-router-dom'
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
import moment from "moment";

// Import Images
import room_1 from '../assets/img/room_1.png';
import room_2 from '../assets/img/room_2.png';
import room_3 from '../assets/img/room_3.png';

const DiscoverCard: React.FC<{ price: number, distance: number, boxes: number, host: string, startDate: Date, endDate: Date, listingId?: string, image?: string }> = ({ price, distance, boxes, host, startDate, endDate, listingId, image }) => {
	return (<>
		<IonCard>
			<IonItem>
				<IonRow>
					<IonCol col-12>
						<IonCardTitle color="success">${price}/mo</IonCardTitle>
						<IonCardSubtitle><IonIcon name="pin"></IonIcon>{distance} Miles </IonCardSubtitle>
						<IonCardSubtitle><IonIcon name="cube"></IonIcon> {boxes} Boxes</IonCardSubtitle>
						<IonCardSubtitle><IonIcon name="person"></IonIcon> {host}</IonCardSubtitle>
					</IonCol>
				</IonRow>
			</IonItem>

			<IonCardContent class="ion-no-padding">
				<IonRow>
					<IonCol col-12 >
						<IonImg src={image} alt="Room"/>
						<p>Space Available: {moment(startDate).format('ll')} - {moment(endDate).format('ll')}</p>
						
						<Link to={{
							pathname: '/listing',
							state: {
								id: listingId
							}
						}}>
							<IonButton expand="full" color="warning" size="default" href="/listing">
								<IonIcon name="calendar" slot="start"></IonIcon>BOOK
							</IonButton>
						</Link>
					</IonCol>
				</IonRow>
			</IonCardContent>
		</IonCard>
	</>)
}

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

				<DiscoverCard price={23} distance={1.3} boxes={3} host="Savannah Smith" startDate={new Date('March 3, 2019')} endDate={new Date('Aug 8, 2019')} image={room_1} />
				<DiscoverCard price={43} distance={1.3} boxes={4} host="Charles Smith" startDate={new Date('March 3, 2019')} endDate={new Date('Aug 8, 2019')} image={room_2} />
				<DiscoverCard price={33} distance={5.3} boxes={2} host="James Smith" startDate={new Date('March 3, 2019')} endDate={new Date('Aug 8, 2019')} image={room_3} />
				<DiscoverCard price={19} distance={7.4} boxes={1} host="Indie Smith" startDate={new Date('March 3, 2019')} endDate={new Date('Aug 8, 2019')} image={room_1} />
				<DiscoverCard price={55} distance={4} boxes={3} host="Sarah Smith" startDate={new Date('March 3, 2019')} endDate={new Date('Aug 8, 2026')} image={room_2} />
			</IonContent>
		</>)
	}
}

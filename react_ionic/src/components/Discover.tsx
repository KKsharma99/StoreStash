import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
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
import useSWR from 'swr';
import wretch from 'wretch';

// Import Images
import room_1 from '../assets/img/room_1.png';
import room_2 from '../assets/img/room_2.png';
import room_3 from '../assets/img/room_3.png';

export type DiscoverListing = {
	host: any;
	fullName: string;
    lat?: number;
    lon?: number;
    capacity?: number;
    remSpace: number;
    startDate: Date;
    endDate: Date;
	price: number;
	distance: number;
	image?: string;
	_id: string;
}

// TODO: get user's current location
// TODO: use values from the search parameters
function fetcher(url: string): Promise<[DiscoverListing]> {
	return wretch(url).query({ lat: 11, lon: 11, minCapacity: 1, maxPrice: 100 }).get().json();
}

const DiscoverCard: React.FC<DiscoverListing> = ({ price, distance, remSpace, host, fullName, startDate, endDate, _id: _id, image }) => {
	return (<>
		<IonCard>
			<IonItem>
				<IonRow>
					<IonCol col-12>
						<IonCardTitle color="success">${price}/mo</IonCardTitle>
						<IonCardSubtitle><IonIcon icon="pin"></IonIcon>{distance} Miles </IonCardSubtitle>
						<IonCardSubtitle><IonIcon icon="cube"></IonIcon> {remSpace} Boxes</IonCardSubtitle>
						<IonCardSubtitle><IonIcon icon="person"></IonIcon> {fullName}</IonCardSubtitle>
					</IonCol>
				</IonRow>
			</IonItem>

			<IonCardContent class="ion-no-padding">
				<IonRow>
					<IonCol col-12 >
						<IonImg src={image} alt="Room"/>
						<p>Space Available: {moment(startDate).format('ll')} - {moment(endDate).format('ll')}</p>
						
						<Link to={`/listing/${_id}`}>
							<IonButton expand="full" color="warning" size="default" href="/listing">
								<IonIcon icon="calendar" slot="start"></IonIcon>BOOK
							</IonButton>
						</Link>
					</IonCol>
				</IonRow>
			</IonCardContent>
		</IonCard>
	</>)
}

const Discover: React.FC<RouteComponentProps> = () => {
	const { data, error } = useSWR('http://localhost:3001/api/listings/nearby', fetcher);
	let content;
	if (error)
		content = <div>failed to load</div>
	if (!data)
		content = <div>loading...</div>
	else {
		const listings = data.map(o => 
			<DiscoverCard {...o} fullName={o.fullName || "Anonymous"} image={o.image || room_1} key={o._id} />
		)
		content =
		<div>
			<IonRow>
				<IonCol col-12 text-center>
					<h1><b>{listings.length}</b> Listings</h1>
					<p>Listed prices are monthly per box.</p>
				</IonCol>
			</IonRow>
			{listings}
		</div>
	}

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
							<IonIcon icon="calendar" slot="start"></IonIcon>
							<IonLabel>Drop off</IonLabel>
							<IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={null}></IonDatetime>
						</IonItem>
					</IonCol>
					<IonCol col-12 >
						<IonItem>
							<IonIcon icon="calendar" slot="start"></IonIcon>
							<IonLabel>Pick up</IonLabel>
							<IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={null}></IonDatetime>
						</IonItem>
					</IonCol>
				</IonRow>

				<IonRow>
					<IonCol col-12 >
						<IonItem>
							<IonIcon icon="cube" slot="start"></IonIcon>
							<IonLabel>Boxes</IonLabel>
							<IonSelect>
								<IonSelectOption value="1">1</IonSelectOption>
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
							<IonIcon icon="cash" slot="start"></IonIcon>
							<IonLabel>Max Price per Box</IonLabel>
							<IonSelect>
								<IonSelectOption value="20">$20</IonSelectOption>
								<IonSelectOption value="40">$40</IonSelectOption>
								<IonSelectOption value="75">$75</IonSelectOption>
								<IonSelectOption value="100">$100</IonSelectOption>
							</IonSelect>
						</IonItem>
					</IonCol>
				</IonRow>

			</IonList>

			{content}


		</IonContent>
	</>)
}

export default Discover;
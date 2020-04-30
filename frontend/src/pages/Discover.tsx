import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonIcon, IonList, IonGrid, IonSelectOption, IonSelect, IonItem, IonLabel, IonDatetime, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRow, IonCol, IonImg, IonPage } from '@ionic/react';
import { pin, cube, calendar, person, cash, checkmark } from 'ionicons/icons';
import useSWR from 'swr';
import DiscoverCard from '../components/DiscoverCard';

// Import Images
import buzz from '../assets/img/buzz.png';
import wretcher from '../wretcher';

// TODO: get user's current location
// TODO: use values from the search parameters
function fetcher(url: string) {
	return wretcher.url(url).query({ lat: 33.7700594, lon: -84.3916245, minCapacity: 1, maxPrice: 100 }).get().json();
}

const Discover: React.FC<RouteComponentProps> = () => {
	const { data, error } = useSWR('/api/discover', fetcher);
	let content;
	if (error)
		content = <div>failed to load</div>
	if (!data)
		content = <div>loading...</div>
	else {
		const listings = data.map(o => 
			<DiscoverCard {...o} fullName={o.fullName || "Anonymous"} image={o.image || buzz} key={o._id} />
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

	return (<IonPage>
		<IonHeader>
			<IonToolbar color="warning">
				<IonButtons slot="start">
					<IonMenuButton></IonMenuButton>
				</IonButtons>
				<IonTitle>Discover</IonTitle>
			</IonToolbar>
		</IonHeader>

		<IonContent>
			<IonGrid>
				<IonRow>
					<IonCol sizeMd="6" offsetMd="3">
						<h1>Filter</h1>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol sizeMd="3" offsetMd="3" >
						<IonItem>
							<IonIcon icon={calendar} slot="start"></IonIcon>
							<IonLabel>Drop off</IonLabel>
							<IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={null}></IonDatetime>
						</IonItem>
					</IonCol>
					<IonCol sizeMd="3">
						<IonItem>
							<IonIcon icon={calendar} slot="start"></IonIcon>
							<IonLabel>Pick up</IonLabel>
							<IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={null}></IonDatetime>
						</IonItem>
					</IonCol>
				</IonRow>

				<IonRow>
					<IonCol sizeMd="3" offsetMd="3">
						<IonItem>
							<IonIcon icon={cube} slot="start"></IonIcon>
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
					<IonCol sizeMd="3">
						<IonItem>
							<IonIcon icon={cash} slot="start"></IonIcon>
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
				<IonRow>
					<IonCol sizeMd="6" offsetMd="3">
						{content}
					</IonCol>
				</IonRow>
			</IonGrid>
		</IonContent>
	</IonPage>)
}

export default Discover;
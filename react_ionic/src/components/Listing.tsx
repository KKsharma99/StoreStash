import React, { useState, useContext, MouseEvent } from 'react'
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
	IonInput,
	IonPage
} from '@ionic/react'
import { pin, cube, person, calendar, card } from 'ionicons/icons';
import { AppContext, ActionTypes } from '../context/appContext';
import wretch from 'wretch';
import { RouteComponentProps } from 'react-router';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import { DiscoverListing } from './Discover'

import room_1 from '../assets/img/room_1.png';
import room_2 from '../assets/img/room_2.png';
import room_3 from '../assets/img/room_3.png';
import useSWR from 'swr';

const ListingCard: React.FC<DiscoverListing> = ({ price, distance, remSpace, host, fullName, startDate, endDate, _id: listingId, image }) => {
	return (<>
		<IonCard>
			<IonItem>
				<IonRow>
					<IonCol col-12>
						<IonCardTitle color="success">${price}/mo</IonCardTitle>
						<IonCardSubtitle><IonIcon icon={pin}></IonIcon>{distance} Miles </IonCardSubtitle>
						<IonCardSubtitle><IonIcon icon={cube}></IonIcon> {remSpace} Boxes</IonCardSubtitle>
						<IonCardSubtitle><IonIcon icon={person}></IonIcon> {fullName}</IonCardSubtitle>
					</IonCol>
				</IonRow>
			</IonItem>

			<IonCardContent class="ion-no-padding">
				<IonRow>
					<IonCol col-12 >
						<IonImg src={image} alt="Room"/>
						<p>Space Available: {moment(startDate).format('ll')} - {moment(endDate).format('ll')}</p>
					</IonCol>
				</IonRow>
			</IonCardContent>
		</IonCard>
	</>)
}

const Listing: React.FC<RouteComponentProps & {listingId: string}> = (props) => {
	const { listingId } = useParams();
	const { state, dispatch } = useContext(AppContext);
	const { userId, token } = state;
	const [boxes, setBoxes] = useState<number>(1);
	const [dropoff, setDropoff] = useState('');
	const [pickup, setPickup] = useState('');
	const [phoneNum, setPhoneNum] = useState('');

	function validate() {
		return dropoff != '' && pickup != '' && phoneNum != '';
	}

	const handleSubmit = (e: MouseEvent | any) => {
		e.preventDefault();
		if (validate()) {
			try {
				wretch(`http://localhost:3001/api/listings/${listingId}/rent`)
					.post({
						renter: '5e5642bec7dd3d438c196572',
						boxes,
						dropoff: dropoff,
						pickup: pickup
					})
					.json(data => console.log(data))
					.then(() => props.history.push('/confirmation'));
			} catch (err) {
				console.log(err);
			}
		}
	}

	const { data, error } = useSWR(`http://localhost:3001/api/listings/${listingId}`, url => wretch(url).get().json());
	let listing;
	if (!listingId || error)
		listing = <div>Failed to load</div>
	else if (!data)
		listing = <div>Loading…</div>
	else {
		listing = <ListingCard {...(data as DiscoverListing)} fullName={data.fullName || "Anonymous"} image={data.image || room_1} key={data._id} />;
	}

	return (<IonPage>
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

			{listing}

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
								<IonIcon icon={calendar} slot="start"></IonIcon>
								<IonLabel>Drop off</IonLabel>
								<IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={dropoff} onIonChange={e => setDropoff((e.target as HTMLInputElement).value)} ></IonDatetime>
							</IonItem>
						</IonCol>
						<IonCol col-12 >
							<IonItem>
								<IonIcon icon={calendar} slot="start"></IonIcon>
								<IonLabel>Pick up</IonLabel>
								<IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={pickup} onIonChange={e => setPickup((e.target as HTMLInputElement).value)} ></IonDatetime>
							</IonItem>
						</IonCol>
					</IonRow>

					<IonRow>
						<IonCol col-12 >
							<IonItem>
								<IonIcon icon={cube} slot="start"></IonIcon>
								<IonLabel>Box Count</IonLabel>
								<IonSelect>
									<IonSelectOption value="1">1</IonSelectOption>
									<IonSelectOption value="2">2</IonSelectOption>
									<IonSelectOption value="3">3</IonSelectOption>
								</IonSelect>
							</IonItem>
						</IonCol>
					</IonRow>


					<IonRow>
						<IonCol col-12 >
							<IonItem>
								<IonInput
									type="text"
									placeholder="Enter Phone Number"
									value={phoneNum}
									onIonChange={e => setPhoneNum((e.target as HTMLInputElement).value)}
								></IonInput>
							</IonItem>
						</IonCol>
					</IonRow>

					<IonRow>
						<IonCol col-12 text-center>
							<p><b>Order Total: </b><IonText color="success"><b>$55</b></IonText></p>
						</IonCol>
					</IonRow>

					<IonRow>
						<IonCol col-12 >
							{/* Disable link: https://stackoverflow.com/a/38321726/5139284 */}
							<Link to={{pathname: '/confirmation'}} style={{ textDecoration: 'none' }}>
								<IonButton color="warning" size="default" expand="full" href="/confirmation" onClick={handleSubmit} disabled={!validate()}>
									<IonIcon icon={card} slot="start"></IonIcon>Pay and Confirm
								</IonButton>
							</Link>
						</IonCol>
					</IonRow>
				</IonList>

			</IonGrid>
		</IonContent>
	</IonPage>)
}

export default Listing;
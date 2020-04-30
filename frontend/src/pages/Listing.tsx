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
import { AppContext } from '../context/appContext';
import { RouteComponentProps } from 'react-router';
import { Link, useParams } from 'react-router-dom';
import { range } from 'lodash';
import useSWR from 'swr';

import ListingCard from '../components/ListingCard'
import { DiscoverListing } from '../types';

import room_1 from '../assets/img/room_1.png';
import room_2 from '../assets/img/room_2.png';
import room_3 from '../assets/img/room_3.png';
import wretcher from '../wretcher';


const Listing: React.FC<RouteComponentProps & {listingId: string}> = (props) => {
	const { listingId } = useParams();
	const { state, dispatch } = useContext(AppContext);
	const { userId, token } = state;
	const [boxes, setBoxes] = useState<number>(1);
	const [dropoff, setDropoff] = useState<Date|null>(null);
	const [pickup, setPickup] = useState<Date|null>(null);
	const [phoneNum, setPhoneNum] = useState('');

	function validate() {
		return dropoff != null && pickup != null && phoneNum != '';
	}

	const handleSubmit = async (e: MouseEvent | any) => {
		e.preventDefault();
		if (validate()) {
			try {
				await wretcher
					.url(`/api/listings/${listingId}/rent`)
					.post({
						renter: userId,
						boxes,
						dropoff,
						pickup
					})
					.json(data => console.log(data))
				props.history.push('/booking_confirmation')
			} catch (err) {
				console.log(err);
			}
		}
	}

	const { data, error } = useSWR(`/api/listings/${listingId}`, url => wretcher.url(url).get().json());
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
					<IonCol sizeMd="6" offsetMd="3" text-center>
						<h2>Listing Details</h2>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol sizeMd="6" offsetMd="3" text-center>
						{listing}
					</IonCol>
				</IonRow>
				
				<IonRow>
					<IonCol sizeMd="6" offsetMd="3" text-center>
						<h2>Order Details</h2>
					</IonCol>
				</IonRow>
			
				<IonList lines="none">
					<IonRow>
						<IonCol sizeMd="6" offsetMd="3" >
							<IonItem>
								<IonIcon icon={calendar} slot="start"></IonIcon>
								<IonLabel>Drop off</IonLabel>
								<IonDatetime displayFormat="MMM DD, YYYY" min={data?.startDate} max={data?.endDate} value={dropoff?.toString()} onIonChange={e => setDropoff(new Date((e.target as HTMLInputElement).value))} ></IonDatetime>
							</IonItem>
						</IonCol>
						<IonCol sizeMd="6" offsetMd="3" >
							<IonItem>
								<IonIcon icon={calendar} slot="start"></IonIcon>
								<IonLabel>Pick up</IonLabel>
								<IonDatetime displayFormat="MMM DD, YYYY" min={data?.startDate} max={data?.endDate} value={pickup?.toString()} onIonChange={e => setPickup(new Date((e.target as HTMLInputElement).value))} ></IonDatetime>
							</IonItem>
						</IonCol>
					</IonRow>

					<IonRow>
						<IonCol sizeMd="6" offsetMd="3" >
							<IonItem>
								<IonIcon icon={cube} slot="start"></IonIcon>
								<IonLabel>Box Count</IonLabel>
								
								<IonSelect value={boxes} onIonChange={e => setBoxes(parseInt((e.target as HTMLInputElement).value))}>
									{range(1, data?.remSpace + 1 || 3).map(i => 
										<IonSelectOption value={i} key={i}>{i}</IonSelectOption>
									)}
								</IonSelect>
							</IonItem>
						</IonCol>
					</IonRow>


					<IonRow>
						<IonCol sizeMd="6" offsetMd="3" >
							<IonItem>
								<IonInput
									type="tel"
									placeholder="Enter Phone Number"
									value={phoneNum}
									onIonChange={e => setPhoneNum((e.target as HTMLInputElement).value)}
								></IonInput>
							</IonItem>
						</IonCol>
					</IonRow>

					<IonRow>
						<IonCol sizeMd="6" offsetMd="3" text-center>
							{/* 2.628e9 is the number of milliseconds per month */}
							<p><b>Order Total: </b><IonText color="success"><b>{dropoff && pickup && dropoff < pickup ? (Math.abs(pickup as any - (dropoff as any)) / 2.628e9 * boxes * data?.price).toFixed(2) : '…'}</b></IonText></p>
						</IonCol>
					</IonRow>

					<IonRow>
						<IonCol sizeMd="6" offsetMd="3" >
							{/* Disable link: https://stackoverflow.com/a/38321726/5139284 */}
							<IonButton color="warning" size="default" expand="full" onClick={handleSubmit} disabled={!validate()}>
								<IonIcon icon={card} slot="start"></IonIcon>Pay and Confirm
							</IonButton>
						</IonCol>
					</IonRow>
				</IonList>

			</IonGrid>
		</IonContent>
	</IonPage>)
}

export default Listing;
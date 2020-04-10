import React, { useState, useContext } from 'react'
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
import { AppContext, ActionTypes } from '../context/appContext';
import wretch from 'wretch';
import { RouteComponentProps } from 'react-router';
import moment from 'moment';
import { Link } from 'react-router-dom';

import room_1 from '../assets/img/room_1.png';
import room_2 from '../assets/img/room_2.png';
import room_3 from '../assets/img/room_3.png';

const ListingCard: React.FC<{ price: number, distance: number, boxes: number, host: string, startDate: Date, endDate: Date, listingId?: string, image?: string }> = ({ price, distance, boxes, host, startDate, endDate, listingId, image }) => {
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
					</IonCol>
				</IonRow>
			</IonCardContent>
		</IonCard>
	</>)
}

const Listing: React.FC<RouteComponentProps & {listingId: string}> = (props) => {
	const listingId = props.listingId;
	const { state, dispatch } = useContext(AppContext);
	const { userId, token } = state;
	const [boxes, setBoxes] = useState<number>(1);
	const [dropoff, setDropoff] = useState('');
	const [pickup, setPickup] = useState('');
	const [phoneNum, setPhoneNum] = useState('');

	function validate() {
		return dropoff != '' && pickup != '' && phoneNum != '';
	}

	const handleSubmit = async (e: MouseEvent) => {
		e.preventDefault();
		if (validate()) {
			try {
				await wretch('http://localhost:3001/api/listings/5e5430932e29c233b8c04455/rent')
					.post({
						renter: '5e5642bec7dd3d438c196572',
						boxes,
						dropoff: dropoff,
						pickup: pickup
					})
					.json(data => console.log(data));
				props.history.push('/confirmation')
			} catch (err) {
				console.log(err);
			}
		}
	}

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

			<ListingCard price={6} distance={0.3} boxes={3} host="Kunal Sharma" startDate={new Date('December 15, 2019')} endDate={new Date('December 10, 2020')} image={room_1} listingId={listingId} />

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
								<IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={dropoff} onIonChange={e => setDropoff((e.target as HTMLInputElement).value)} ></IonDatetime>
							</IonItem>
						</IonCol>
						<IonCol col-12 >
							<IonItem>
								<IonIcon name="calendar" slot="start"></IonIcon>
								<IonLabel>Pick up</IonLabel>
								<IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={pickup} onIonChange={e => setPickup((e.target as HTMLInputElement).value)} ></IonDatetime>
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
									<IonIcon name="card" slot="start"></IonIcon>Pay and Confirm
								</IonButton>
							</Link>
						</IonCol>
					</IonRow>
				</IonList>

			</IonGrid>
		</IonContent>
	</>)
}

export default Listing;
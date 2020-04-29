import React, { useState, useContext, MouseEvent } from 'react';
import { AppContext, ActionTypes } from '../context/appContext';
import wretch from 'wretch';
import moment from 'moment';
import useSWR from 'swr';
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
	IonPage

} from '@ionic/react'
import { RouteComponentProps } from 'react-router';

// Images
import user from '../assets/img/user.png';
import { Link } from 'react-router-dom';

const HistoryCard: React.FC<HistoryType> = ({ name, price, boxes, dropoff, pickup }) => {
	const current = pickup > new Date();

	return (<>
		<IonCard color={current ? "" : "light"}>
			<IonCardContent>
				<IonCardSubtitle>{name}</IonCardSubtitle>
				<hr></hr>
				<IonRow>
					<IonCol col-12 >
						<p>
							Total Cost: <IonText color="success"><b>${price}</b></IonText> <br />
							Boxes: {boxes} <br />
							{moment(dropoff).format('ll')} - {moment(pickup).format('ll')} <br />
							Status: {current ? <IonText color="success"><b>Current</b></IonText> : "Past"}
						</p> 
					</IonCol>
				</IonRow>
			</IonCardContent>
		</IonCard>
	</>);
}

const Profile: React.FC<RouteComponentProps> = (props) => {
	const { state, dispatch } = useContext(AppContext);
	const { userId, token, firstName, lastName } = state;
	let lendingsContent;
	let rentalsContent;
	// TODO
	const { data: lendings, error: errorLendings } = useSWR(userId ? `http://localhost:3001/api/users/${userId}/lendings` : null, url => wretch(url).get().json());
	const { data: rentals, error: errorRentals } = useSWR(userId ? `http://localhost:3001/api/users/${userId}/rentals` : null, url => wretch(url).get().json());
	if (!errorRentals && rentals) {
		rentalsContent = rentals.map(rental => <HistoryCard {...rental} key={rental._id} />)
	} 

	return (<IonPage>
		<IonHeader>
			<IonToolbar color="warning">
				<IonButtons slot="start">
					<IonMenuButton></IonMenuButton>
				</IonButtons>
				<IonTitle>Profile</IonTitle>
			</IonToolbar>
		</IonHeader>

		<IonContent>
			<IonCard text-center>
				{/* TODO: use user's name */}
				<IonItem>
					<IonTitle><h1>{firstName + ' ' + lastName}</h1></IonTitle>
				</IonItem>

				<IonCardContent class="ion-no-padding">
					<IonRow>
						<IonCol col-12 >
							<Link to={{pathname: '/post'}} style={{ textDecoration: 'none' }}>
								<IonButton expand="full" color="warning" size="default" href="/post"><IonIcon icon="add-circle" slot="start"></IonIcon>Lend Space</IonButton>
							</Link>
						</IonCol>
					</IonRow>
				</IonCardContent>
			</IonCard>

			<IonItem>
				<IonTitle>Lending History</IonTitle>
			</IonItem>

			{/* TODO */}


			<IonItem>
				<IonTitle>Renting History</IonTitle>
			</IonItem>

			{rentalsContent}

		</IonContent>
	</IonPage>)
}

type HistoryType = {
	name: string,
	price: number,
	boxes: number,
	dropoff: Date,
	pickup: Date,
}

export default Profile;
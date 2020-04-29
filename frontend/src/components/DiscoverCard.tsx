import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom'
import { IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonIcon, IonList, IonGrid, IonSelectOption, IonSelect, IonItem, IonLabel, IonDatetime, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRow, IonCol, IonImg, IonPage } from '@ionic/react';
import { pin, cube, calendar, person, cash, checkmark } from 'ionicons/icons';
import moment from 'moment';
import { DiscoverListing } from '../types';

const DiscoverCard: React.FC<DiscoverListing> = ({ price, distance, remSpace, host, fullName, startDate, endDate, _id, image }) => {
	return (<>
		<IonCard>
			<IonItem>
				<IonRow>
					<IonCol col-12>
						<IonCardTitle color="success">${price}/mo per box</IonCardTitle>
						<IonCardSubtitle><IonIcon icon={pin}></IonIcon>{distance} Miles </IonCardSubtitle>
						<IonCardSubtitle><IonIcon icon={cube}></IonIcon> {remSpace} Boxes</IonCardSubtitle>
						<IonCardSubtitle><IonIcon icon={person}></IonIcon> {fullName} <IonIcon icon={checkmark}></IonIcon></IonCardSubtitle>
					</IonCol>
				</IonRow>
			</IonItem>

			<IonCardContent class="ion-no-padding">
				<IonRow>
					<IonCol col-12 >
						<IonImg src={image} alt="Room"/>
						<p>Space Available: {moment(startDate).format('ll')} - {moment(endDate).format('ll')}</p>
						<p>Contact: {host.phoneNumber || host.email} </p>
						
						<Link to={`/listing/${_id}`}>
							<IonButton expand="full" color="warning" size="default" href={`/listing/${_id}`}>
								<IonIcon icon={calendar} slot="start"></IonIcon><strong>BOOK</strong>
							</IonButton>
						</Link>
					</IonCol>
				</IonRow>
			</IonCardContent>
		</IonCard>
	</>)
}

export default DiscoverCard;
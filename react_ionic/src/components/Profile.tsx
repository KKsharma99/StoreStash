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

const HistoryCard: React.FC<HistoryType> = ({ name, totalCost, boxes, startDate, endDate }) => {
	const current = endDate > new Date();

	return (<>
		<IonCard color={current ? "" : "light"}>
			<IonCardContent>
				<IonCardSubtitle>{name}</IonCardSubtitle>
				<hr></hr>
				<IonRow>
					<IonCol col-12 >
						<p>
							Total Cost: <IonText color="success"><b>${totalCost}</b></IonText> <br />
							Boxes: {boxes} <br />
							{moment(startDate).format('ll')} - {moment(endDate).format('ll')} <br />
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
	const { userId, token } = state;
	let lendingsContent;
	let rentalsContent;
	// TODO
	const { data: rentals, error: errorRentals } = useSWR(userId ? `http://localhost:3001/api/users/${userId}/rentals` : null, url => wretch(url).get());
	// const { data: lendings, error: errorLendings } = useSWR(userId ? `http://localhost:3001/api/users/${userId}/lendings` : null, url => wretch(url).get());

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
					<IonTitle><h1>Sarah Shadid</h1></IonTitle>
				</IonItem>

				<IonCardContent class="ion-no-padding">
					<IonRow>
						<IonCol col-12 >
							<IonImg src={user} alt="User Profile Picture"/>
							<hr></hr>
							
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

			<HistoryCard name="Sarah Smith" totalCost={110} boxes={1} startDate={new Date('Feb 26, 2020')} endDate={new Date('Apr 27, 2020')} />

			<IonCard>
				<IonCardContent>
					<IonCardSubtitle>Sarah Smith</IonCardSubtitle>
					<hr></hr>
					<IonRow>
						<IonCol col-12 >
							<p>
								Total Cost: <IonText color="success"><b>$110</b></IonText> <br />
								Boxes: 1 <br />
								Feb 26, 2020 - Apr 20, 2020 <br />
								Status: <IonText color="success"><b>Current</b></IonText>
							</p> 
						</IonCol>
					</IonRow>
				</IonCardContent>
			</IonCard>

			<IonCard>
				<IonCardContent>
					<IonCardSubtitle>Donald Trump</IonCardSubtitle>
					<hr></hr>
					<IonRow>
						<IonCol col-12 >
							<p>
								Total Cost: <IonText color="success"><b>$99</b></IonText> <br />
								Boxes: 3 <br />
								Jun 4, 2019 - Jun 19, 2020 <br />
								Status: <IonText color="success"><b>Current</b></IonText>
							</p> 
						</IonCol>
					</IonRow>
				</IonCardContent>
			</IonCard>

			<IonCard color="light">
				<IonCardContent>
					<IonCardSubtitle>Rick Ross</IonCardSubtitle>
					<hr></hr>
					<IonRow>
						<IonCol col-12 >
							<p>
								Total Cost: <IonText color="success"><b>$59</b></IonText> <br />
								Boxes: 3 <br />
								May 8, 2019 - Jun 23, 2019 <br />
								Status: Past
							</p> 
						</IonCol>
					</IonRow>
				</IonCardContent>
			</IonCard>


			<IonItem>
				<IonTitle>Renting History</IonTitle>
			</IonItem>

			<IonCard>
				<IonCardContent>
					<IonCardSubtitle>Sarah Smith</IonCardSubtitle>
					<hr></hr>
					<IonRow>
						<IonCol col-12 >
							<p>
								Total Cost: <IonText color="success"><b>$110</b></IonText> <br />
								Boxes: 1 <br />
								Feb 26, 2020 - Apr 20, 2020 <br />
								Status: <IonText color="success"><b>Current</b></IonText>
							</p> 
						</IonCol>
					</IonRow>
				</IonCardContent>
			</IonCard>

			<IonCard>
				<IonCardContent>
					<IonCardSubtitle>Donald Trump</IonCardSubtitle>
					<hr></hr>
					<IonRow>
						<IonCol col-12 >
							<p>
								Total Cost: <IonText color="success"><b>$99</b></IonText> <br />
								Boxes: 3 <br />
								Jun 4, 2019 - Jun 19, 2020 <br />
								Status: <IonText color="success"><b>Current</b></IonText>
							</p> 
						</IonCol>
					</IonRow>
				</IonCardContent>
			</IonCard>

			<IonCard color="light">
				<IonCardContent>
					<IonCardSubtitle>Rick Ross</IonCardSubtitle>
					<hr></hr>
					<IonRow>
						<IonCol col-12 >
							<p>
								Total Cost: <IonText color="success"><b>$59</b></IonText> <br />
								Boxes: 3 <br />
								May 8, 2019 - Jun 23, 2019 <br />
								Status: Past
							</p> 
						</IonCol>
					</IonRow>
				</IonCardContent>
			</IonCard>

			<IonCard color="light">
				<IonCardContent>
					<IonCardSubtitle>Arnold Schönberg</IonCardSubtitle>
					<hr></hr>
					<IonRow>
						<IonCol col-12 >
							<p>
								Total Cost: <IonText color="success"><b>$59</b></IonText> <br />
								Boxes: 3 <br />
								May 8, 2019 - Jun 23, 2019 <br />
								Status: Past
							</p> 
						</IonCol>
					</IonRow>
				</IonCardContent>
			</IonCard>

			<IonCard color="light">
				<IonCardContent>
					<IonCardSubtitle>Megan Fox</IonCardSubtitle>
					<hr></hr>
					<IonRow>
						<IonCol col-12 >
							<p>
								Total Cost: <IonText color="success"><b>$59</b></IonText> <br />
								Boxes: 3 <br />
								May 8, 2019 - Jun 23, 2019 <br />
								Status: Past
							</p> 
						</IonCol>
					</IonRow>
				</IonCardContent>
			</IonCard>
		</IonContent>
	</IonPage>)
}

type HistoryType = {
	name: string,
	totalCost: number,
	boxes: number,
	startDate: Date,
	endDate: Date
}

export default Profile;
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
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonRow,
	IonCol,
	IonImg,
	IonButton,
	IonText

} from '@ionic/react'
import { RouteComponentProps } from 'react-router';

// Images
import user from '../assets/img/user.png';
import { Link } from 'react-router-dom';

const Profile: React.FC<RouteComponentProps> = (props) => {
	return (<>
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
				<IonItem>
					<IonTitle><h1>Sarah Shadid</h1></IonTitle>
				</IonItem>

				<IonCardContent class="ion-no-padding">
					<IonRow>
						<IonCol col-12 >
							<IonImg src={user} alt="User Profile Picture"/>
							<hr></hr>
							
							<Link to={{pathname: '/post'}} style={{ textDecoration: 'none' }}>
								<IonButton expand="full" color="warning" size="default" href="/post"><IonIcon name="add-circle" slot="start"></IonIcon>Lend Space</IonButton>
							</Link>
						</IonCol>
					</IonRow>
				</IonCardContent>
			</IonCard>

			<IonItem>
				<IonTitle>Lending History</IonTitle>
			</IonItem>

			<IonCard>
				<IonCardContent>
					<IonCardSubtitle>Sarah Smith</IonCardSubtitle>
					<hr></hr>
					<IonRow>
						<IonCol col-12 >
							<p>
								Total Cost: <IonText color="success"><b>$110</b></IonText> <br></br>
								Boxes: 1 <br></br>
								Feb 26, 2020 - Apr 20, 2020 <br></br>
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
								Total Cost: <IonText color="success"><b>$99</b></IonText> <br></br>
								Boxes: 3 <br></br>
								Jun 4, 2019 - Jun 19, 2020 <br></br>
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
								Total Cost: <IonText color="success"><b>$59</b></IonText> <br></br>
								Boxes: 3 <br></br>
								May 8, 2019 - Jun 23, 2019 <br></br>
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
								Total Cost: <IonText color="success"><b>$110</b></IonText> <br></br>
								Boxes: 1 <br></br>
								Feb 26, 2020 - Apr 20, 2020 <br></br>
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
								Total Cost: <IonText color="success"><b>$99</b></IonText> <br></br>
								Boxes: 3 <br></br>
								Jun 4, 2019 - Jun 19, 2020 <br></br>
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
								Total Cost: <IonText color="success"><b>$59</b></IonText> <br></br>
								Boxes: 3 <br></br>
								May 8, 2019 - Jun 23, 2019 <br></br>
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
								Total Cost: <IonText color="success"><b>$59</b></IonText> <br></br>
								Boxes: 3 <br></br>
								May 8, 2019 - Jun 23, 2019 <br></br>
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
								Total Cost: <IonText color="success"><b>$59</b></IonText> <br></br>
								Boxes: 3 <br></br>
								May 8, 2019 - Jun 23, 2019 <br></br>
								Status: Past
							</p> 
						</IonCol>
					</IonRow>
				</IonCardContent>
			</IonCard>
		</IonContent>
	</>)
}

export default Profile;
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

export default class Profile extends React.Component {
	render() {
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
						<IonTitle><h1>sarahshadid</h1></IonTitle>
					</IonItem>

					<IonCardContent class="ion-no-padding">
						<IonRow>
							<IonCol col-12 >
								<IonImg src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"/>
								<hr></hr>
								
								<IonButton expand="full" color="warning" size="default"><IonIcon name="add-circle" slot="start"></IonIcon>Lend Space</IonButton>
							</IonCol>
						</IonRow>
					</IonCardContent>
				</IonCard>


				<IonItem>
					<IonTitle>Rent History</IonTitle>
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
}
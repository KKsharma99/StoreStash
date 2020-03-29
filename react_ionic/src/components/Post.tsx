import React from 'react'
import {
	IonContent,
	IonItem,
	IonRow,
	IonCol,
	IonButton,
	IonInput,
	IonGrid,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonMenuButton,
	IonTitle,
	IonIcon,
	IonSelectOption,
	IonSelect,
	IonLabel,
	IonDatetime,
	IonCheckbox
} from '@ionic/react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'

const Post: React.FC<RouteComponentProps> = (props) => {
	return (<>
		<IonHeader>
			<IonToolbar color="warning">
				<IonButtons slot="start">
					<IonMenuButton></IonMenuButton>
				</IonButtons>
				<IonTitle>Post a Listing</IonTitle>
			</IonToolbar>
		</IonHeader>

		<IonContent class="ion-padding">
			<IonGrid>
				<IonRow justify-content-center>
					<IonCol align-self-center size-md="6" size-lg="5" size-xs="12">
						<br />

						<IonItem>
							<IonIcon name="calendar" slot="start"></IonIcon>
							<IonLabel>Start Availability</IonLabel>
							<IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={null}></IonDatetime>
						</IonItem>
						<IonItem>
							<IonIcon name="calendar" slot="start"></IonIcon>
							<IonLabel>End Availability</IonLabel>
							<IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={null}></IonDatetime>
						</IonItem>

						<IonItem>
							<IonIcon name="cube" slot="start"></IonIcon>
							<IonLabel>Boxes</IonLabel>
							<IonSelect>
								<IonSelectOption value="1" selected>1</IonSelectOption>
								<IonSelectOption value="2">2</IonSelectOption>
								<IonSelectOption value="3">3</IonSelectOption>
								<IonSelectOption value="4">4</IonSelectOption>
								<IonSelectOption value="5">5</IonSelectOption>
								<IonSelectOption value="6">6</IonSelectOption>
								<IonSelectOption value="7">7</IonSelectOption>
								<IonSelectOption value="8">8</IonSelectOption>
								<IonSelectOption value="9">9</IonSelectOption>
								<IonSelectOption value="10">10</IonSelectOption>
							</IonSelect>
						</IonItem>

						<IonItem>
							<IonInput type="text" placeholder="Monthly Price per Box ($)"></IonInput>
						</IonItem>

						<IonItem>
							<IonInput type="text" placeholder="Street Address"></IonInput>
						</IonItem>
						<IonItem>
							<IonInput type="text" placeholder="City"></IonInput>
						</IonItem>
						<IonItem>
							<IonInput type="text" placeholder="State"></IonInput>
						</IonItem>
						<IonItem>
							<IonInput type="text" placeholder="Zip"></IonInput>
						</IonItem>
						<br></br>
						<IonLabel>Image of your storage space</IonLabel> <br></br>
						<IonItem>
							<input type="file" placeholder="Storage Space"></input>
						</IonItem>
						<br />
						<Link to={{pathname: '/discover'}} style={{ textDecoration: 'none' }}>
							<IonButton color="warning" size="default" href="/discover" expand="block">
								Post Listing
							</IonButton>
						</Link>
					</IonCol>
				</IonRow>
			</IonGrid>
		</IonContent>
	</>)
}

export default Post;
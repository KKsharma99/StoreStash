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
	IonDatetime
} from '@ionic/react'

export default class Tab2 extends React.Component {
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
				<div className="ion-padding about-info">
					<h4>Just a regular title Tab 2</h4>

					<IonList lines="none">
						<IonItem>
							<IonIcon name="calendar" slot="start"></IonIcon>
							<IonLabel>Date Picker</IonLabel>
							<IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={null}></IonDatetime>
						</IonItem>

						<IonItem>
							<IonIcon name="pin" slot="start"></IonIcon>
							s<IonLabel>Selector</IonLabel>
							<IonSelect>
								<IonSelectOption value="madison">Madison, WI</IonSelectOption>
								<IonSelectOption value="austin">Austin, TX</IonSelectOption>
								<IonSelectOption value="chicago">Chicago, IL</IonSelectOption>
								<IonSelectOption value="seattle">Seattle, WA</IonSelectOption>
							</IonSelect>
						</IonItem>
					</IonList>

					<p>
						Just a regular paragrah passing by
           		 	</p>
				</div>
			</IonContent>
		</>)
	}
}
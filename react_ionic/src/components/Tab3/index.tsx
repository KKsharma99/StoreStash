import React from 'react'
import {
	IonContent,
	IonItem,
	IonRow,
	IonCol,
	IonImg,
	IonButton,
	IonInput,
	IonGrid

} from '@ionic/react'

export default class Tab3 extends React.Component {
	render() {
		return (<>

			<IonContent class="ion-padding">
				<IonGrid>
					<IonRow>
						<IonCol col-12 >
							<br></br>
							<br></br>
							<br></br>
							<IonImg src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.15752-0/p280x280/87410422_218144796034626_6427845418083680256_n.png?_nc_cat=108&_nc_ohc=a-TqTLyCU6QAX9r2qH9&_nc_ht=scontent-ort2-1.xx&oh=8cfd31078edaf06e989de12132ebd9ca&oe=5F004821"/>
						</IonCol>
					</IonRow>
					<IonRow justify-content-center>
						<IonCol align-self-center size-md="6" size-lg="5" size-xs="12">
								<br></br>
								<IonItem>
									<IonInput type="text" placeholder="Username"></IonInput>
								</IonItem>

								<IonItem>
									<IonInput type="password" placeholder="Password"></IonInput>
								</IonItem>
							<br></br>
								<IonButton color="warning" size="default" href="/touchid" expand="block">Login</IonButton>
							<br></br>


						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>

		</>)
	}
}
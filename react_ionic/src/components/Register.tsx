import React from 'react'
import {
	IonContent,
	IonItem,
	IonRow,
	IonCol,
	IonImg,
	IonButton,
	IonInput,
	IonGrid,
	IonText

} from '@ionic/react'
import { Link } from 'react-router-dom'
import axios from "axios"
import qs from "qs"

export default class Register extends React.Component {
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
									<IonInput type="email" placeholder="Gatech Email"></IonInput>
								</IonItem>

								<IonItem>
									<IonInput type="password" placeholder="Password"></IonInput>
								</IonItem>

								<IonItem>
									<IonInput type="password" placeholder="Repeat Password"></IonInput>
								</IonItem>
							<br></br>
								<IonButton color="warning" size="default" href="/discover" expand="block" onClick={() =>
									axios.post("https://storestash.herokuapp.com/api/users/new", 
										qs.stringify({ email: 'michaelchen@gatech.edu', password: '3iqiruituhfd' })
									)
								}>Register</IonButton>
							<br></br>
							<p>Already have an account? <Link color="primary" to="/"><u>Login</u></Link></p>


						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>

		</>)
	}
}
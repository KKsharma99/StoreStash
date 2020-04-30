import React from 'react'
// @ts-ignore
import Geocode from 'react-geocode';
import { v1 as uuidv1 } from 'uuid';
import { cube, calendar } from 'ionicons/icons';
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
	IonCheckbox,
	IonPage

} from '@ionic/react'
import { AppContext } from '../context/appContext';
import wretcher from '../wretcher';

export default class Post extends React.Component<any, any> {

	static contextType = AppContext;

    constructor(props: any) {
        super(props);
        // @ts-ignore
        const today = new Date();
        Geocode.setApiKey("AIzaSyDfbGSyIXX1nhPFH-lBUFJhrstImpicaiQ");
        this.state = {street: '', city: '', state: '', zip: '',
            capacity: 0, startDate: today, endDate: today, price: '', imageUrl: ''};
        this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	  }
	  
    handleChange(event: any) {
        console.log(event.target.value);
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(name);
        this.setState({
          [name]: value
        });
    }

    handleSubmit = async event => {
        console.log('A name was submitted: ' + this.state.street);
        // Address Geocoding
        let address: string = this.state.street + "," + this.state.city + "," + this.state.state + "," + this.state.zip
		const hostId = this.context.state.userId;
        let capacity = Number(this.state.capacity)
        let price = Number(this.state.price)

        //hostId: any, lat: number, lon: number, capacity: number, startDate: Date, endDate: Date, price: number)
        Geocode.fromAddress(address).then(
          async (response: any) => {
            const { lat, lng } = response.results[0].geometry.location;
            let today = new Date()
            let lon = lng
            let id = uuidv1();
            console.log(typeof hostId);
            await wretcher.url('/api/new-listing')
                .post({ id, hostId, lat, lon, capacity, startDate: new Date(this.state.startDate), endDate: new Date(this.state.endDate), price, image: this.state.imageUrl })
				.json(data => console.log(data));
			this.props.history.push('/listing_confirmation')	
          },
          (error:any) => {
            console.error(error);
          }
        );
    }

	render() {
		return (<IonPage>
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
						<IonCol align-self-center sizeMd="6" offsetMd="3">
								<br></br>

								<IonItem>
									<IonIcon icon={calendar} slot="start"></IonIcon>
									<IonLabel>Start Availability</IonLabel>
									<IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={this.state.startDate} name="startDate" onIonChange={this.handleChange}></IonDatetime>
								</IonItem>
								<IonItem>
									<IonIcon icon={calendar} slot="start"></IonIcon>
									<IonLabel>End Availability</IonLabel>
									<IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={this.state.endDate} name="endDate" onIonChange={this.handleChange}></IonDatetime>
								</IonItem>

								<IonItem>
									<IonIcon icon={cube} slot="start"></IonIcon>
									<IonLabel>Boxes</IonLabel>
									<IonSelect value={this.state.capacity} name="capacity" onIonChange={this.handleChange}>
										<IonSelectOption value="1" >1</IonSelectOption>
										<IonSelectOption value="2" > 2 </IonSelectOption>
										<IonSelectOption value="3"> 3 </IonSelectOption>
										<IonSelectOption value="4"> 4 </IonSelectOption>
										<IonSelectOption value="5"> 5 </IonSelectOption>
										<IonSelectOption value="6"> 6 </IonSelectOption>
										<IonSelectOption value="7"> 7 </IonSelectOption>
										<IonSelectOption value="8"> 8 </IonSelectOption>
										<IonSelectOption value="9"> 9 </IonSelectOption>
										<IonSelectOption value="10"> 10 </IonSelectOption>
									</IonSelect>
								</IonItem>

								<IonItem>
									<IonInput type="number" placeholder="Monthly Price per Box ($)" name="price" value={this.state.price} onIonChange={this.handleChange}></IonInput>
								</IonItem>

								<IonItem>
									<IonInput type="text" placeholder="Street Address" name="street" value={this.state.street} onIonChange={this.handleChange}></IonInput>
								</IonItem>
								<IonItem>
									<IonInput type="text" placeholder="City" name="city" value={this.state.city} onIonChange={this.handleChange}></IonInput>
								</IonItem>
								<IonItem>
									<IonInput type="text" placeholder="State" name="state" value={this.state.state} onIonChange={this.handleChange}></IonInput>
								</IonItem>
								<IonItem>
									<IonInput type="text" placeholder="Zip" name="zip" value={this.state.zip} onIonChange={this.handleChange}></IonInput>
								</IonItem>
								<br></br>
								<IonLabel>Image of your Storage Space</IonLabel> <br></br>
								<IonItem>
									<input type="file" placeholder="Storage Space"></input>
								</IonItem>
								<IonItem>
									<IonInput type="text" placeholder="Image URL" name="imageUrl" value={this.state.imageUrl} onIonChange={this.handleChange}></IonInput>
								</IonItem>
							<br></br>
								<IonButton color="warning" size="default" expand="block" onClick={this.handleSubmit}>
									Post Listing
								</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>

		</IonPage>)
	}
}
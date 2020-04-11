import React from 'react'
// @ts-ignore
import Geocode from 'react-geocode';
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

export default class Post extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        // @ts-ignore
        Geocode.setApiKey("AIzaSyDfbGSyIXX1nhPFH-lBUFJhrstImpicaiQ");
        this.state = {price: '', street: '', city: '', state: '', zip: ''};
        console.log("constructor");
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

    handleSubmit(event: any) {
        console.log('A name was submitted: ' + this.state.street);
        // Address Geocoding
        let address: string = this.state.street + "," + this.state.city + "," + this.state.state + "," + this.state.zip
        // @ts-ignore
        Geocode.fromAddress(address).then(
          (response:any) => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat, lng);
            //Listing(hostId: "1", lat: lat, lon: lng, capacity: 4, startDate: Date, endDate: Date, price: 0)
          },
          (error:any) => {
            console.error(error);
          }
        );
    }

	render() {
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
								<br></br>

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
							<br></br>
								<IonButton color="warning" size="default" expand="block" onClick={this.handleSubmit}>
									Post Listing
								</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>

		</>)
	}
}
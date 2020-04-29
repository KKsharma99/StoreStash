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
	IonHeader,
	IonToolbar,
	IonButtons,
	IonMenuButton,
	IonTitle,
	IonPage,
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonCardContent,
	IonIcon,
	IonLabel,

} from '@ionic/react'
import { wifi, wine, pin, warning, walk } from 'ionicons/icons';
export default class Faq extends React.Component {
	render() {
		return (<IonPage>


			<IonHeader>
				<IonToolbar color="warning">
					<IonButtons slot="start">
						<IonMenuButton></IonMenuButton>
					</IonButtons>
					<IonTitle>FAQ</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent>
				<IonGrid>
					<IonRow>
						<IonCol sizeMd="6" offsetMd="3">
							<IonCard>
								<IonCardHeader>
									<IonCardTitle>Is the lender liable if the items are stolen or damaged? Are they responsible for repair?</IonCardTitle>
								</IonCardHeader>
								<IonCardContent>
									In the case of theft or damage due to the negligence of the lender, the lender is responsible for replacement or repair
									for damaged items.  The lender is not liable for damage resultant of floods, accidental fires, tornadoes, or
									other natural disasters.
								</IonCardContent>
							</IonCard>
							<IonCard>
								<IonCardHeader>
									<IonCardTitle>What happens if a renter stores drugs/weapons or other illegal items?</IonCardTitle>
								</IonCardHeader>
								<IonCardContent>
									The lender is not responsible for illegal items inside of boxes such as drugs or weapons. Renters are not
									allowed to store such items. Additionally, the space renter must seal all boxes intended for storage. 
								</IonCardContent>
							</IonCard>
							<IonCard>
								<IonCardHeader>
									<IonCardTitle>What if the lender/renter does not show up for the agreed pickup time?</IonCardTitle>
								</IonCardHeader>
								<IonCardContent>
									The lender agrees to be available at the date and time specified for pickup. Being absent at the pickup time can lead to a fine (percentage taken from the earnings of the storage transaction in question), suspension, or expulsion from the StoreStash platform.
									The space renter agrees to pick up items on the date agreed upon. If the renter is late, the renter must pay twice the prorated monthly rate for each day late.
								</IonCardContent>
							</IonCard>
							<IonCard>
								<IonCardHeader>
									<IonCardTitle>What if the renter takes back his/her items without completing payment?</IonCardTitle>
								</IonCardHeader>
								<IonCardContent>
									The renter agrees that the lender can withhold the return of stored items until the renter has made the payment. This does not include the waiting time for payment processing.
									If the renter decides to take items back early, the amount due before item withdrawal is the remaining amount of the transaction.					
								</IonCardContent>
							</IonCard>
							<IonCard>
								<IonCardHeader>
									<IonCardTitle>Can the lender withhold items until payment is received?</IonCardTitle>
								</IonCardHeader>
								<IonCardContent>
									The renter agrees that the lender can withhold the return of stored items until the renter has made the payment. This does not include the waiting time for payment processing.
								</IonCardContent>
							</IonCard>
							<IonCard>
								<IonCardHeader>
									<IonCardTitle>What is the payment model? How much is paid upfront, monthly, etc?</IonCardTitle>
								</IonCardHeader>
								<IonCardContent>
									Amount Due at Signing: 20% of the total storage rent cost must be paid as a deposit. The remaining cost will be 
									charged monthly such that the deposit will be applied towards the initial month(s) and the user will be charged thereafter. 
									Amount Due at Completion:	If the renter decides to take items back early, the amount due before item withdrawal is the remaining amount of the transaction.
								</IonCardContent>
							</IonCard>
							<IonCard>
								<IonCardHeader>
									<IonCardTitle>What happens if the renter wants to take back his or her items early, do they still pay for the registered duration?</IonCardTitle>
								</IonCardHeader>
								<IonCardContent>
									Yes, if the renter wishes to pick up items early, the renter must pick up ALL items and is still responsible to pay for the complete duration initially agreed upon.

								</IonCardContent>
							</IonCard>
							<IonCard>
								<IonCardHeader>
									<IonCardTitle>What happens if the lender wants the renter to take back items early, is there a fine?</IonCardTitle>
								</IonCardHeader>
								<IonCardContent>
								If the space lender wishes to terminate early and return items to the renter. The lender will be charged 50% of earnings through the transaction up until the new pick up date. The renter will not need to pay for the time between the earlier pickup and the original pickup time.
								</IonCardContent>
							</IonCard>
							<IonCard>
								<IonCardHeader>
									<IonCardTitle>Are payment details stored on the application? If so, is it secure?</IonCardTitle>
								</IonCardHeader>
								<IonCardContent>
									Payment is handled offline between the lender and renter. At this time, StoreStash does not integrate payment or charge any fees.
								</IonCardContent>
							</IonCard>
							<IonCard>
								<IonCardHeader>
									<IonCardTitle>How do I get in contact with the space lender?</IonCardTitle>
								</IonCardHeader>
								<IonCardContent>
									The phone number of the lender is posted on the listing. All communication is to be conducted outside of the app at this time.
								</IonCardContent>
							</IonCard>
							<IonCard>
								<IonCardHeader>
									<IonCardTitle>Is my address posted if I am a lender?</IonCardTitle>
								</IonCardHeader>
								<IonCardContent>
									No, it is not. Your address is considered confidential and we do not present it to other users. We use your address to present listings to users by proximity. 
								</IonCardContent>
							</IonCard>
							<IonCard>
								<IonCardHeader>
									<IonCardTitle>How do I know the pickup/dropoff time and location?</IonCardTitle>
								</IonCardHeader>
								<IonCardContent>
									The exact details of picking up or dropping off are to be handled between the lender and renter outside of the application. The lender's phone number is included on the listing.
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>	
				</IonGrid>

			</IonContent>
		</IonPage>)
	}
}
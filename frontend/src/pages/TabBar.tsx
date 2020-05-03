import React from 'react'
import { IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet, IonIcon } from '@ionic/react'
import { Redirect } from 'react-router';
import { search, person, help } from 'ionicons/icons';
import { Route } from 'react-router-dom'
import Discover from './Discover'
import Profile from './Profile'
import Listing from './Listing'
import BookingConfirmation from './BookingConfirmation'
import ListingConfirmation from './ListingConfirmation'
import Faq from './Faq'
import Post from './Post'

interface TabBarProps {}

const TabBar: React.FC<TabBarProps> = () =>
	<IonTabs>
		<IonRouterOutlet>
			<Route path="/:tab(discover)" component={Discover} exact />
			<Route path="/:tab(profile)" component={Profile} exact />
			<Route path="/:tab(listing)/:listingId" component={Listing} />
			<Route path="/:tab(booking_confirmation)" component={BookingConfirmation} exact />
			<Route path="/:tab(listing_confirmation)" component={ListingConfirmation} exact />
			<Route path="/:tab(faq)" component={Faq} exact />
			<Route path="/:tab(post)" component={Post} exact />
			<Route exact path="/" render={() => <Redirect to="/discover" />} />
		</IonRouterOutlet>

		<IonTabBar slot="bottom">
			<IonTabButton tab="discover" href="/discover">
				<IonIcon icon={search} />
				<IonLabel>Discover</IonLabel>
			</IonTabButton>
			<IonTabButton tab="profile" href="/profile">
				<IonIcon icon={person} />
				<IonLabel>Profile</IonLabel>
			</IonTabButton>
			<IonTabButton tab="faq" href="/faq">
				<IonIcon icon={help} />
				<IonLabel>FAQ</IonLabel>
			</IonTabButton>
		</IonTabBar>
	</IonTabs>;

export default TabBar;
import React, { Component } from 'react'
import { IonApp, IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet, IonIcon } from '@ionic/react'
import { search, person, help } from 'ionicons/icons';
import { Route, Link } from 'react-router-dom'
import { IonPage } from '@ionic/react'
import Discover from './Discover'
import Profile from './Profile'
import Listing from './Listing'
import BookingConfirmation from './BookingConfirmation'
import ListingConfirmation from './ListingConfirmation'
import Faq from './Faq'
import Post from './Post'
import config from 'wretch/dist/config';

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
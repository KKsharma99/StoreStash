import React, { Component } from 'react'
import { IonApp, IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet, IonIcon } from '@ionic/react'
import { search, person } from 'ionicons/icons';
import { Route, Link } from 'react-router-dom'
import { IonPage } from '@ionic/react'
import Discover from './Discover'
import Profile from './Profile'
import Listing from './Listing'
import Confirmation from './Confirmation'
import Post from './Post'

interface TabBarProps {}

const TabBar: React.FC<TabBarProps> = () =>
	<IonTabs>
		<IonRouterOutlet>
			<Route path="/:tab(discover)" component={Discover} exact />
			<Route path="/:tab(profile)" component={Profile} exact />
			<Route path="/:tab(listing)/:listingId" component={Listing} />
			<Route path="/:tab(confirmation)" component={Confirmation} exact />
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
		</IonTabBar>
	</IonTabs>;

export default TabBar;
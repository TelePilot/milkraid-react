import React, { lazy, Suspense, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/header/header.component'
import GlobalStateProvider from './store/GlobalStateProvider'
import ArtistContextProvider from './store/ArtistContext'
import ReleaseContextProvider from './store/ReleaseContext'
import RetailContextProvider from './store/RetailContext'
import Loader from './components/loader/loader.component'
import ArtistExt from './pages/artist-ext/artist-ext.component'
const HomePage = lazy(() => import('./pages/home/home.component'))
const ArtistPage = lazy(() => import('./pages/artists/artists.component'))
const ReleasePage = lazy(() => import('./pages/releases/releases.component'))
const RetailPage = lazy(() => import('./pages/retail/retail.component'))
function App() {
	return (
		<GlobalStateProvider>
			<div className='App'>
				<Header />
				<Switch>
					<Suspense fallback={<Loader />}>
						<Route path={'/'} component={HomePage} exact />
						<ArtistContextProvider>
							<Route path={'/artists'} exact component={ArtistPage} />
							<Route path={'/artists/:artistId'} component={ArtistExt} />
						</ArtistContextProvider>
						<RetailContextProvider>
							<Route path={'/retail'} component={RetailPage} />
						</RetailContextProvider>
					</Suspense>
				</Switch>
			</div>
		</GlobalStateProvider>
	)
}

export default App

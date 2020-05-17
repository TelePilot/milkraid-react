import React, { lazy, Suspense, useEffect } from 'react'
import { Route, Switch} from 'react-router-dom'
import './App.css'
import Header from './components/header/header.component'
import GlobalStateProvider from './store/GlobalStateProvider'
import ArtistContextProvider from './store/ArtistContext'
import ReleaseContextProvider from './store/ReleaseContext'
import RetailContextProvider from './store/RetailContext'
import Loader from './components/loader/loader.component'
const HomePage = lazy(() => import('./pages/home/home.component'))
const ArtistPage = lazy(() => import('./pages/artists/artists.component'))
const ReleasePage = lazy(() => import('./pages/releases/releases.component'))
const RetailPage = lazy(() => import('./pages/retail/retail.component'))
function App() {

  useEffect(() => {
    if(document.location.pathName === '/') {
      document.getElementById('wrapper').style.display = 'block'
    }
    else {
      document.getElementById('wrapper').style.display = 'none'
    }
    return function cleanup() {
        document.getElementById('wrapper').style.display = 'none'
    }
},[])

  return (
    <GlobalStateProvider>
      <div className="App">
      <Header />
     <Switch>
       <Suspense fallback={<Loader/>}>
       <Route  path={'/'} component={HomePage} exact />
        <ArtistContextProvider>
          <Route path={'/artists'} component={ArtistPage} />
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

import React, { lazy, Suspense } from 'react'
import { Route, Switch} from 'react-router-dom'
import './App.css'
import Header from './components/header/header.component'
import GlobalStateProvider from './store/GlobalStateProvider'
import ReleaseContextProvider from './store/ReleaseContext'
import RetailContextProvider from './store/RetailContext';

const HomePage = lazy(() => import('./pages/home/home.component'))
const ReleasePage = lazy(() => import('./pages/releases/releases.component'))
const RetailPage = lazy(() => import('./pages/retail/retail.component'))
function App() {
  return (
    <GlobalStateProvider>
      <div className="App">
      <Header />
     <Switch>
       <Suspense fallback={<div>Hey</div>}>
       <Route path={'/'} component={HomePage} exact />
        
        <ReleaseContextProvider>
          <Route path={'/releases'} component={ReleasePage} />
        </ReleaseContextProvider>
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

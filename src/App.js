import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import HomePage from './Pages/HomePage/HomePage';
import EventsPage from './Pages/EventsPage/EventsPage';
import { Footer } from './Components/Footer/Footer';
import Arduino from './Components/Loader/Arduino';



function App() {
  const [loading, setLoading] = useState('loading')
  document.onreadystatechange = () => {
    setLoading(document.readyState)
  }
  return (
    <React.Fragment>
    <div style={{display: `${loading !== 'complete' ? 'inline' : 'none' }`}} className='loader'>
      <p>Uploading Code...</p>
      <Arduino />
      <div className='spinner'></div>
    </div>
    <div style={{visibility: `${loading !== 'complete' ? 'hidden' : 'visible' }`}} className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/events' component={EventsPage} />
      </Switch>
      <Footer />
    </div>
    </React.Fragment>
  );
}

export default App;

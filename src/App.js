import React from 'react'
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import HomePage from './Pages/HomePage/HomePage';
import EventsPage from './Pages/EventsPage/EventsPage';
import { Footer } from './Components/Footer/Footer';

function App() {
  // const [loading, setLoading] = useState('loading')
  // document.onreadystatechange = () => {
  //   if(document.readyState !== 'complete'){
  //     setLoading(document.readyState)
  //   }else{
  //     setLoading('complete')
  //   }
  // }
  // window.onload = function(){
  //   setLoading('complete')
  // }
  return (
    <React.Fragment>
      <div className="App">
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

import { Route, Switch } from 'react-router-dom';

import './App.scss';

import HomePage from './Pages/HomePage/HomePage';
import EventsPage from './Pages/EventsPage/EventsPage';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/events' component={EventsPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

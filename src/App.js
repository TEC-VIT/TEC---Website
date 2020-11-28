import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './Pages/HomePage/HomePage';
import EventsPage from './Pages/EventsPage/EventsPage';
import ProjectPage from './Pages/ProjectsPage/ProjectPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/events' component={EventsPage} />
        <Route exact path='/projects' component={ProjectPage} />
      </Switch>
    </div>
  );
}

export default App;

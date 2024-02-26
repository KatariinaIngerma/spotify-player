import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Search from './components/Search';
import Playlist from './components/Playlist';

function App() {
  return (
    <Route>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/playlist/:id" component={Playlist} />
    </Switch>
  </Route>
  );
}

export default App;

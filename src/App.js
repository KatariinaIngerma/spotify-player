import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Search from './components/Search';
import Playlist from './components/Playlist';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/playlist/:id" component={Playlist} />
    </Routes>
  </Router>
  );
}

export default App;

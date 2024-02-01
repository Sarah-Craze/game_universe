import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Importation correcte de Switch
import Home from './components/Home';
import PageList from './components/PageList';
import PageDetail from './components/PageDetail';
import './styles/style.scss'; // Chemin d'accès au fichier SCSS

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/page-list" component={PageList} />
      <Route path="/page-detail" component={PageDetail} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
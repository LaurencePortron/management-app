import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Welcome from './components/Home/Welcome';
import Tasks from './components/Taskmanager/Tasks';
import Home from './components/images/Home';
import ProgressChart from './components/Progress/ProgressChart';
import WishList from './components/Wishlist/WishList';

function App() {
  return (
    <div className='App'>
      <Router>
        <nav className='navigation-bar'>
          <ul>
            <Home />
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/tasks'>Dashboards</Link>
            </li>
            <li>
              <Link to='/progress'>Progress</Link>
            </li>
            <li>
              <Link to='/wishlist'>WishList</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={Welcome} />

          <Route path='/tasks' component={Tasks} />
          <Route exact path='/progress' component={ProgressChart} />
          <Route exact path='/wishlist' component={WishList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Welcome from './components/Home/Welcome';
import TaskDashboard from './components/Taskmanager/TaskDashboard';
import Home from './components/icons/Home';
import ProgressChart from './components/ProgressChart';
import WishList from './components/WishList';

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
              <Link to='/dashboard'>Dashboards</Link>
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
          <Route path='/dashboard' component={TaskDashboard} />
          <Route exact path='/progress' component={ProgressChart} />
          <Route exact path='/wishlist' component={WishList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

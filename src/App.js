import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Welcome from './components/Home/Welcome';
import TaskDashboard from './components/TaskDashboard';

function App() {
  return (
    <div className='App'>
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/dashboards'>Dashboards</Link>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/dashboards' component={TaskDashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

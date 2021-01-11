import logo from './logo.svg';
import './App.css';
import Header from './compenent/Header'
import {BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom';
import Home from './compenent/Home/HomePage';
import ViewTask from'./compenent/task/ViewTask';
import Login from './compenent/user/Login';
import User from './compenent/user/User';
import PrivateRoute from './compenent/user/PrivateRoute';
import PageNotFOund from './compenent/PageNotFOund';
import ChangePassword from './compenent/user/ChangePassword'


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
      <PrivateRoute exact path="/" component={Home}></PrivateRoute>
      <PrivateRoute exact path="/Task" component={ViewTask}></PrivateRoute>
      <Route exact path="/Login" component={Login}></Route>
      <Route exact path="/404" component={PageNotFOund}></Route>
      <PrivateRoute exact path="/User" component={User}></PrivateRoute>
      <PrivateRoute exact path="/change-password" component={ChangePassword}></PrivateRoute>
      <Redirect to="/404"/>
      </Switch>
    </Router>
    
  );
}

export default App;

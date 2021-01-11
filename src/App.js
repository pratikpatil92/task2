import logo from './logo.svg';
import './App.css';
import Header from './compenent/Header'
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './compenent/Home/HomePage';
import TaskList from './compenent/task/TaskList'

function App() {
  return (
    <Router>
      <Header></Header>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/Task" component={TaskList}></Route>

    </Router>
    
  );
}

export default App;

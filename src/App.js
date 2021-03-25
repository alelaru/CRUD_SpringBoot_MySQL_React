import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent></HeaderComponent>
            <div className="container">
              <Switch> 
                      <Route path="/" exact component={ListEmployeeComponent} /> 
                      <Route path="/employees" component={ListEmployeeComponent} />
                      <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
                      <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
              </Switch>
            </div>
          <FooterComponent></FooterComponent>
      </Router>
    </div>
  );
}

export default App;

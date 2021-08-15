import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import { Dashboard } from './dashboard';
import Users from './users';
import Product from './product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Createuser from './createuser';
import Edituser from './edituser';
import Productedit from './proudctedit';
import { UserProvider } from './usercontext';
import Createproduct from './createproduct';
function App() {
  return (
    <Router>
    <div id="wrapper">
      <Sidebar></Sidebar>
       <div id="content-wrapper" class="d-flex flex-column">
       <div id="content">
      <Topbar></Topbar>
      <div class="container-fluid">
        <Switch>
          <UserProvider>
          <Route path="/" component={Dashboard} exact={true}/>
          <Route path="/user" component={Users} exact={true}/>
          <Route path="/product" component={Product} exact={true}/>
          <Route path="/createuser" component={Createuser} exact={true}/>
          <Route path="/createproduct" component={Createproduct} exact={true}/>
          <Route path="/user/edit/:id" component={Edituser} exact={true}/>
          <Route path="/product/edit/:id" component={Productedit} exact={true}/>
          </UserProvider>
        </Switch>
       </div> 
       </div>
       </div>      
    </div>
    </Router>
  );
}

export default App;

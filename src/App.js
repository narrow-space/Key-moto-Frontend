import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Purchase from './Components/Home/PurchagePage/Purchase';
import Explore from './Components/Home/Explore/Explore';

import Register from './Components/Home/Register/Register';
import Login from './Components/Home/Login/Login';
import Authprovider from './Components/Context/Authprovider';
import Privateroute from './Components/Home/Login/Privateroute/Privateroute';
import Pay from './Components/Home/Dashboard/Pay';
import Myorders from './Components/Home/Dashboard/MyOrders/Myorders';
import Review from './Components/Home/Dashboard/Review/Review';
import Makeadmin from './Components/Home/Makeadmin/Makeadmin';
import Addproducts from './Components/Home/Makeadmin/Addproducts/Addproducts';
import Manageallorders from './Components/Home/Makeadmin/Managallorders/Manageallorders';
import Manageproducts from './Components/Home/Makeadmin/Manageproducts/Manageproducts';
import Notfound from './Components/Notfound/Notfound';
import Adminroute from './Components/Home/Login/Adminroute/Adminroute';




function App() {
  return (
    <div className="App">
     <Authprovider>
     <Router>
        <Switch>

          <Route exact path="/">
           <Home></Home>
          </Route>

          <Route  path="/home">
           <Home></Home>
          </Route>

          <Privateroute   path="/bikes/:bikeId">
          <Purchase></Purchase>
          </Privateroute>
          <Route  path="/explore">
            <Explore></Explore>
          </Route>
          <Route  path="/login">
            <Login></Login>
          </Route>
          <Route  path="/register">
            <Register></Register>
          </Route>
          <Route  path="/pay">
           <Pay></Pay>
          </Route>

          <Route  path="/myorders">
           <Myorders></Myorders>
          </Route>

          <Route  path="/review">
           <Review></Review>
          </Route>

          <Adminroute  path="/makeadmin">
         <Makeadmin></Makeadmin>
          </Adminroute>

          <Route  path="/addproducts">
         <Addproducts></Addproducts>
          </Route>

          <Route  path="/manageallorders">
         <Manageallorders></Manageallorders>
          </Route>


          <Route  path="/manageproducts">
        <Manageproducts></Manageproducts>
          </Route>

          <Route exact path="*">
        <Notfound></Notfound>
          </Route>


        </Switch>
     
      </Router>
     </Authprovider>
    </div>
  );
}

export default App;

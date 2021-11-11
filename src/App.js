import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Explore from './Pages/Explore/Explore/Explore';
import AddProduct from './Pages/AddProduct/AddProduct';
import Order from './Pages/Home/Home/Order/Order';
import AddOrder from './Pages/AddOrder/AddOrder';
import MyOrder from './Pages/MyOrder/MyOrder';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/explore">
            <Explore></Explore>
          </Route>

          <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/addProduct">
            <AddProduct></AddProduct>
          </Route>

          <Route exact path="/manageProducts">
            <ManageProducts></ManageProducts>
          </Route>

          <Route  exact path="/addOrder/:id">
            <AddOrder></AddOrder>
          </Route>

          <Route exact path="/order/:id">
            <Order></Order>
            </Route>

          <Route path="/myOrder">
            <MyOrder></MyOrder>
            </Route>

          <Route path="/manageOrder">
            <ManageOrder></ManageOrder>
            </Route>

            <Route exact path="*">
           <NotFound></NotFound>
            </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;

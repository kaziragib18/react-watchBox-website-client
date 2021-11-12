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
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider'
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard'
import Payment from './Pages/Payment/Payment';
import AddReview from './Pages/AddReview/AddReview';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/explore">
              <Explore></Explore>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route exact path="/addProduct">
              <AddProduct></AddProduct>
            </Route>

            <Route exact path="/manageProducts">
              <ManageProducts></ManageProducts>
            </Route>

            <Route exact path="/addOrder/:id">
              <AddOrder></AddOrder>
            </Route>

            <Route exact path="/order/:id">
              <Order></Order>
            </Route>

            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>

            <Route exact path="/manageOrder">
              <ManageOrder></ManageOrder>
            </Route>

            <Route exact path="/addReview">
              <AddReview></AddReview>
            </Route>

            <Route exact path="/payment">
              <Payment></Payment>
            </Route>

            <Route exact path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </Route>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

import React from 'react'
import './App.css';
import NavBar from './component/NavBar/NavBar'
import Products from './component/Products/Products'
import ProductDetail from './component/Products/Product/ProductDetail/ProductDetail';
import SignIn from './component/SignIn/SignIn';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Cart from './component/Cart/Cart';
import Register from './component/Register/Register';
import Shipping from './component/Shipping/Shipping';
import Payment from './component/Payment/Payment'
import PlaceOrder from './component/PlaceOrder/PlaceOrder';
import UserProfile from './component/Profile/UserProfile/UserProfile';
import OrderDetails from './component/OrderDetails/OrderDetails';
import Home from './component/Home/Home';
import OrderHistory from './component/Profile/OrderHistory/OrderHistory';
import AdminRoute from './component/Routes/AdminRoute';
import Admin from './componentAdmin/AdminDashboard/Admin';
import Ingredients from './component/Ingredients/Ingredients';
import CreateProduct from './componentAdmin/ProductsAdmin/CreateProduct/CreateProduct';
import PrivateRoute from './component/Routes/PrivateRoute';
import Calculator from './component/Calculator/Calculator';
import FitnessVideo from './component/FitnessVideo/FitnessVideo';




function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/product/:id" exact component={ProductDetail} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/register" exact component={Register} />
          <Route path="/shipping" exact component={Shipping} />
          <Route path="/payment" exact component={Payment} />
          <Route path="/placeorder" exact component={PlaceOrder} />
          <Route path="/userprofile" exact component={UserProfile} />
          <Route path="/order/:id" exact component={OrderDetails} />
          <Route path="/orderhistory" exact component={OrderHistory} />
          <Route path='/fitnessvideo' component={FitnessVideo}/>
          <PrivateRoute path="/calculator" exact component={Calculator}></PrivateRoute>
          <PrivateRoute path="/ingredients" exact component={Ingredients} />

          <AdminRoute path="/admin" exact component={Admin} />
          <AdminRoute path="/admin/product/create" exact component={CreateProduct} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

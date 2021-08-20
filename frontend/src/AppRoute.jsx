import React from 'react'
import Calculator from './component/Calculator/Calculator';
import Cart from './component/Cart/Cart';
import Home from './component/Home/Home';
import Ingredients from './component/Ingredients/Ingredients';
import NavBar from './component/NavBar/NavBar';
import OrderDetails from './component/OrderDetails/OrderDetails';
import Payment from './component/Payment/Payment';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';
import ProductDetail from './component/Products/Product/ProductDetail/ProductDetail';
import Products from './component/Products/Products';
import OrderHistory from './component/Profile/OrderHistory/OrderHistory';
import UserProfile from './component/Profile/UserProfile/UserProfile';
import Register from './component/Register/Register';
import AdminRoute from './component/Routes/AdminRoute';
import PrivateRoute from './component/Routes/PrivateRoute';
import Shipping from './component/Shipping/Shipping';
import SignIn from './component/SignIn/SignIn';
import Admin from './componentAdmin/AdminDashboard/Admin';
import AdminProduct from './componentAdmin/AdminDashboard/AdminProduct/AdminProduct';
import CreateProduct from './componentAdmin/Products/CreateProduct/CreateProduct';
import { Route, Switch, useLocation } from "react-router-dom";
import UpdateProduct from './componentAdmin/Products/UpdateProduct/UpdateProduct';

const AppRoute = () => {
    const location = useLocation()
    return (
        <div className="App">
            {!location.pathname.includes('/admin') && <NavBar />}
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
                <PrivateRoute path="/calculator" exact component={Calculator}></PrivateRoute>
                <PrivateRoute path="/ingredients" exact component={Ingredients} />

                <AdminRoute path="/admin" exact component={Admin} />
                <AdminRoute path="/admin/product/create" exact component={CreateProduct} />
                <AdminRoute path="/admin/product" exact component={AdminProduct} />
                <AdminRoute path="/admin/product/:id" exact component={UpdateProduct} />
            </Switch>
        </div>
    )
}

export default AppRoute
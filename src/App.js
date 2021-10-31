import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import Foods from './components/Home/Foods/Foods';
import OrderPlace from './components/Home/OrderPlace/OrderPlace';
import Category from './components/Home/Category/Category';
import Login from './components/Login/Login/Login';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Restaurants from './components/Home/Restaurants/Restaurants';
import Footer from './components/Shared/Footer/Footer';
import AddFoods from './components/Home/AddFoods/AddFoods';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/category">
            <Category></Category>
          </Route>
          <Route exact path="/foods">
            <Foods></Foods>
          </Route>
          <PrivateRoute exact path="/addfoods">
            <AddFoods></AddFoods>
          </PrivateRoute>
          <Route exact path="/restaurants">
            <Restaurants></Restaurants>
          </Route>
          <PrivateRoute exact path="/orderplace/:orderId">
            <OrderPlace></OrderPlace>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

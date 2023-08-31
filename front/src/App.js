import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import FarmerLogin from './components/FarmerLogin';
import BuyerLogin from './components/BuyerLogin';
import AdminLogin from './components/Admin/AdminLogin';
import FarmerWelcome from './components/FarmerWelcome';
import FarmerReg from './components/FarmerReg';
import BuyerReg from './components/BuyerReg';
// import Order from './components/FarmerOrder';
import Product from './components/FarmerProduct';
import ErrorPage from './components/ErrorPage';
import CustomProduct from './components/CustomProduct';
import BuyerWelcome from './components/BuyerWelcome';
import BuyerProduct from './components/BuyerProduct';
import BuyerCart from './components/BuyerCart';
import TermsandCondition from './components/TermsAndCondition';
import BuyerPay from './components/BuyerPay';
import BuyerProfile from './components/BuyerProfile';
import FarmerProfile from './components/FarmerProfile';
import AuthenticatedRout from './components/AuthenticateRout';
import AdminWelcome from './components/Admin/AdminWelcome';
import ForgotPassword from './components/ForgotPassword';
import FarmerPersonalDetails from './components/Admin/FarmerPersonalDetails';
import BuyerPersonalDetails from './components/Admin/BuyerPersonalDetails';


function App() {
  return (
    <>
      <Router>
        <Header />
        
        {/* <Slider/> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/farmer-login"  component={FarmerLogin} />
          <Route path="/buyer-login"  component={BuyerLogin} />
          <Route path="/admin-login" component={AdminLogin} />
          <Route path="/farmer-reg"  component={FarmerReg} />
          <Route path="/Buyer-reg"  component={BuyerReg} />
          <AuthenticatedRout path="/buyer-product"  component={BuyerProduct} />
          <AuthenticatedRout path="/buyer/profile"  component={BuyerProfile} />
          <AuthenticatedRout path="/farmer-welcome/:username"  component={FarmerWelcome} />  
          {/* <AuthenticatedRout path="/farmer-order/:username"  component={Order} />
          <AuthenticatedRout path="/farmer-product"  component={Product} /> */}
          <AuthenticatedRout path="/farmer/custom-product"  component={CustomProduct} />
          {/* <AuthenticatedRout path="/farmer-product/add-product/wheat"  component={Product} /> */}
          <AuthenticatedRout path="/buyer-welcome/:username"  component={BuyerWelcome} />  
          <AuthenticatedRout path="/buyer-myCart"  component={BuyerCart} />
          <Route path="/terms-condition" component={TermsandCondition}/>
          <AuthenticatedRout path="/buyer-pay/:payment" component={BuyerPay}/>
          <AuthenticatedRout path="/farmer/profile" component={FarmerProfile}/>
          <AuthenticatedRout path="/admin-welcome/:username"  component={AdminWelcome} />
          <Route path="/forgot-password"  component={ForgotPassword} />
          <Route path="/farmer-info/:username" component={FarmerPersonalDetails}/>
          <Route path="/buyer-info/:username" component={BuyerPersonalDetails}/>
          <Route path="*" component={ErrorPage}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}
export default App;

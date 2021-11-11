import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Registration/Login/Login";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import Signup from "./Pages/Registration/Signup/Signup";
import ExploreServices from "./Pages/ExploreServices/ExploreServices";
import PrivetRoute from "./Pages/Registration/PrivetRoute/PrivetRoute";
import ServiceDetails from "./Pages/Home/ServicesDetails/ServicesDetails";
import Error from "./Pages/Error/Error";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import AllServices from "./Pages/AllServices/AllServices";
import ManageAllOrders from "./Pages/Dashboard/Admin/ManageAllOrders/ManageAllOrders";
// import ServicesDetails from "./Pages/Home/ServicesDetails/ServicesDetails";

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
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/exploreServices">
              <ExploreServices></ExploreServices>
            </Route>
            <Route path="/allServices">
              <AllServices></AllServices>
            </Route>
            <PrivetRoute path="/servicesDetails/:key">
              <ServiceDetails></ServiceDetails>
            </PrivetRoute>
            <PrivetRoute exact path="/allServices/servicesDetails/:key">
              <ServiceDetails></ServiceDetails>
            </PrivetRoute>
            <PrivetRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivetRoute>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

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
import ComingSoon from "./Pages/ComingSoon/ComingSoon";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
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
            <Route path="/servicesDetails/:key">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route path="/comingSoon">
              <ComingSoon></ComingSoon>
            </Route>
            <PrivetRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivetRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
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

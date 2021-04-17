import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddServices from "./components/AddServices/AddServices";
import BookService from "./components/BookService/BookService";
import Login from "./components/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ServiceList from "./components/ServiceList/ServiceList";
import MakeAdmin from "./components/MakeAdmin/MakeAdmin";
import OrderList from "./components/Dashboard/OrderList/OrderList";
import AddReview from "./components/AddReview/AddReview/AddReview";
import ManageService from "./components/Dashboard/ManageService/ManageService";

export const UserContext = createContext();

function App() {
const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <h2>{loggedInUser.email}</h2>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/addService">
            <AddServices />
          </Route>
          <PrivateRoute exact path="/manageServices">
            <ManageService />
          </PrivateRoute>
          <Route exact path="/bookService/:id">
            <BookService />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/serviceList">
            <ServiceList />
          </PrivateRoute>
          <Route exact path="/addAdmin">
            <MakeAdmin />
          </Route>
          <Route exact path="/addAdmin">
            <MakeAdmin />
          </Route>
          <Route exact path="/addReview">
            <AddReview />
          </Route>
          <PrivateRoute exact path="/dashboard">
            <OrderList />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

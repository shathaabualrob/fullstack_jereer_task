import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

// import React from "react";
// import { Route, Router } from "react-router";
// import Home from "./Home";
// import Login from "./Login";
// import SignUp from "./SignUp";


const App = () =>{
  return(
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        {/* <Route exact path="/" component={TwitterHomePage} /> */}
      </div>
    </Router>
  );
};

// function App() {
//   return (
//     // BEM
//     <div className="app">
//       {/* <Sidebar />
//       <Feed /> */}
//       {/* <Widgets /> */}
//     </div>
//   );
// }

export default App;

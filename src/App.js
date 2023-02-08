// App.js
import React from "react";
//import AddNumbers from "./components/AddNumbers";
//import withAuth from "./components/WithAuth";

import Register from "./components/Register";
import Navbar from "./components/NavBar";
import Login from "./components/Login";
//const AuthenticatedAddNumbers = withAuth(AddNumbers);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Register />
      <Login />
      {
        // <AuthenticatedAddNumbers />
      }
    </div>
  );
}

export default App;

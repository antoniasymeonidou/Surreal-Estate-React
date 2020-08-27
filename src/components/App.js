import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import Homepage from "./Homepage";
import Footer from "./Footer";
import Favourites from "./Favourites";
import "../styles/App.css";

function App() {
  const initialState = {
    fields: {
      userID: "",
      name: "",
      email: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);

  const handleLogin = (response) => {
    setFields({
      userID: response.userID,
      name: response.name,
      email: response.email,
    });
  };

  const handleLogout = () => {
    window.FB.logout(() => setFields({ userID: "" }));
  };

  return (
    <div className="app">
      <Navbar
        onLogin={handleLogin}
        onLogout={handleLogout}
        userID={fields.userID}
        name={fields.name}
      />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route
          exact
          path="/properties"
          render={(props) => <Properties {...props} userID={fields.userID} />}
        />
        <Route exact path="/add-property" component={AddProperty} />

        <Route
          exact
          path="/favourites"
          render={(props) => <Favourites {...props} userID={fields.userID} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
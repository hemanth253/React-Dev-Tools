import React from "react";

import contacts from "../contacts";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card details={contacts[0]} />
      <Card details={contacts[1]} />
      <Card details={contacts[2]} />
    </div>
  );
}

export default App;

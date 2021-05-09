import React from "react";

import contacts from "../contacts";
import Card from "./Card";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://picsum.photos/200" />
      <Card details={contacts[0]} />
      <Card details={contacts[1]} />
      <Card details={contacts[2]} />
    </div>
  );
}

export default App;

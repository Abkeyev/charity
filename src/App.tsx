import React from "react";
import {
  Banner,
  Online,
  Benefits,
  Order,
  Additional,
  Useful,
  Footer,
} from "./components";
import "./App.css";

function App() {
  return (
    <div>
      <Banner />
      <Online />
      <Benefits />
      <Order />
      <Useful />
      <Footer />
    </div>
  );
}

export default App;

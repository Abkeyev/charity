import React from "react";
import { Header, Body, Payment, Share, Footer } from "./components";
import "./App.css";

function App() {
  const [open, setOpen] = React.useState(false);

  const handleSetOpen = (open: boolean) => {
    setOpen(open);
  };

  return (
    <>
      <Header open={open} />
      {open ? (
        <Payment />
      ) : (
        <>
          <Body open={open} setOpen={handleSetOpen} />
          <Share />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

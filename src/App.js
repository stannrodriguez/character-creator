import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function BackgroundOverlay() {
  return (
    <div
      style={{
        background: "hsl(195deg, 10%, 86%)",
        position: "fixed",
        bottom: "0px",
        height: "40%",
        width: "100%",
      }}
    ></div>
  );
}

function App() {
  return (
    <>
      <BackgroundOverlay />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;

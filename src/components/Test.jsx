import React from "react";

function App() {
  const setMode = (e) => {
    console.log(e);
    setIsDarkMode((e) => {
      console.log(e);
      return e.target.checked;
    });
  };

  return <button onClick={setMode}>hi</button>;
}

export default App;

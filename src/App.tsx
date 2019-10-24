import * as React from "react";
import Container from "@material-ui/core/Container";

// import MenuList from "./components/MenuList";
import MenuCard from "./components/MenuCard";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <MenuList /> */}
      <MenuCard />
    </div>
  );
};

export default App;

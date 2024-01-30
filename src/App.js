import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./Dashboard";


function App() {

  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Routes>
            {menuItems.map((menu, index) => (
              <Route
                key={menu.name}
                exact={menu.exact}
                path={menu.to}
                element={<Dashboard/>}
              />               
            ))}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

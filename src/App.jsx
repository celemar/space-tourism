import React, { useState } from "react";
import "/src/styles/App.css";
import "/src/styles/Destination.css";
import "/src/styles/Crew.css";
import "/src/styles/Technology.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

function App() {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout activeLink={activeLink} setActiveLink={setActiveLink} />
          }
        >
          <Route index element={<Home setActiveLink={setActiveLink} />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Crew" element={<Crew />} />
          <Route path="/Technology" element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

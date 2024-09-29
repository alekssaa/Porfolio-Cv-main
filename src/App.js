import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { links } from "./data/data";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import { useEffect, useRef } from "react";
import { useProContext } from "./context/contex";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {links.map((link) => {
          return (
            <Route key={link.id} path={link.url} element={link.component} />
          );
        })}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

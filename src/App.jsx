import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./page/Home"));
const About = lazy(() => import("./page/About"));
const GlobalPresence = lazy(() => import("./page/GlobalPresence"));
const Oncology = lazy(() => import("./page/Oncology"));

import "./Reset.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-gray-50 h-screen relative w-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/globalPresence" element={<GlobalPresence />} />
            <Route path="/oncology" element={<Oncology />} />
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

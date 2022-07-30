import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import SendBot from "./pages/SendBot";
import ThumbSwiper from "./pages/ThumbSwiper";

function App() {
  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/" element={<ThumbSwiper />} />
          <Route path="/send" element={<SendBot />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;

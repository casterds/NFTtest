// import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NFT from "./pages/NFT";
import Home from "./pages/Home";
import Chat from "./pages/Chat"

export const App = () => {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nft" element={<NFT />} />
          <Route path="/chat" element={<Chat/>}/>
        </Routes>
      </Router>
    </div>
  );
};

// export default App;

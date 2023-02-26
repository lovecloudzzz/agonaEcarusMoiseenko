import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {AccountPage} from "./pages/AccountPage";
import {PointsPage} from "./pages/PointsPage";
import {MarketPage} from "./pages/MarketPage";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import "./App.sass"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/account" element={<AccountPage/>}/>
            <Route path="/points" element={<PointsPage/>}/>
            <Route path="/market" element={<MarketPage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;

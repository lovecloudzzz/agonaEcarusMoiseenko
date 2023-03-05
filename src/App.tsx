import React from 'react';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {AccountPage} from "./pages/AccountPage";
import {PointsPage} from "./pages/PointsPage";
import {MarketPage} from "./pages/MarketPage";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import "./App.sass"

function App() {
  return (
    <div className="App">
          <Header/>
          <Routes>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/account" element={<AccountPage/>}/>
            <Route path="/points" element={<PointsPage/>}/>
            <Route path="/market" element={<MarketPage/>}/>
          </Routes>
          <Footer/>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/business" element={<News key="business" country="in" category="business" pageSize={12} />} />
            <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" pageSize={12} />} />
            <Route exact path="/" element={<News key="general" country="in" category="general" pageSize={12} />} />
            <Route exact path="/health" element={<News key="health" country="in" category="health" pageSize={12} />} />
            <Route exact path="/science" element={<News key="science" country="in" category="science" pageSize={12} />} />
            <Route exact path="/sports" element={<News key="sports" country="in" category="sports" pageSize={12} />} />
            <Route exact path="/technology" element={<News key="technology" country="in" category="technology" pageSize={12} />} />
          </Routes>
        </BrowserRouter>
        
        
      </div>
    );
  }
}

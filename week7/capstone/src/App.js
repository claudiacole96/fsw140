import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home"
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import Form from "./components/Form";
import Quote from "./components/GetQuote";

function App() {
  return (
    <div>
      <Header />
        <Route exact path = '/'>
          <Home />
        </Route>
        <Route exact path = '/Form'>
          <Form />
        </Route>
        <Route exact path = '/Quote'>
          <Quote />
        </Route>
      <Footer />
    </div>
  );
}

export default App;
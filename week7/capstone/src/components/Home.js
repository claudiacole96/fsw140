import React, { useState, useEffect } from "react";
import Header from "./Header"
import Footer from "./Footer"
import Form from "./Form"
import GetQuote from "./GetQuote";

function Home() {
    return (
      <div className="main-div">
          <div className="home-div">
            <p>Need a little pick me up? It's super easy, you'll type in an inspirational 
                quote that means something to you, and click submit. Then you'll receive a 
                random quote from where someone else has also submitted a quote that meant 
                something to them! <button className="home-button">Continue?...</button>
            </p>
          </div>
      </div>
    );
  }
  
  export default Home;
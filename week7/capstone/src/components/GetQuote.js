import axios from "axios";
import React, { useState, useEffect } from "react";

function Quote(props) {
    const {_id, quoteBody, authorName, likes} = props;

    function getQuoteRowCount() {
        axios.get(`/GetQuotesCount`)
            .then(res => {
                console.log(res.data);
            });
    };

    function getRandQuote(arrLength) {
        let randNumber = Math.floor(Math.random() * arrLength)
        axios.get(`GetQuote/${randNumber}`)
            .then(res => {
                console.log(res.data);
            });
    };

    return (
      <div className="main-div">
          <div className="quote-div">
            <icon className="report-icon"></icon>
            <div className="quote-box">
                <h2 className="quote-body">{quoteBody}</h2>
                <h5 className="author-name">{authorName}</h5>
            </div>
            <icon className="heart-icon"></icon>
            <span className="likes-num">{likes}</span>
          </div>
      </div>
    );
  }
  
  export default Quote;
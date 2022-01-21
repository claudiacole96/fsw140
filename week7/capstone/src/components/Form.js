import React, { useState, useEffect } from "react";

function Form() {
    const [editToggle, setEditToggle] = useState(false);

    return (
      <div className="main-div">
          { !editToggle ?
            <>
            <div className="form-div">
                <form className="quote-form">
                    <input
                        type="text"
                        name="quote-text"
                        className="quote-text"
                        value={inputs.quote-text}
                        onChange={handleChange}
                        placeholder="Inspirational Quote Text Here"
                        minLength="7"
                        required></input>
                    <input
                        type="text"
                        name="author-name"
                        className="author-name"
                        value={inputs.author-name}
                        onChange={handleChange}
                        placeholder="Author (Optional)"></input>
                    <button className="form-button"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        SUBMIT</button>
                </form>
            </div>
            </>
            :
            <>
            <div className="form-complete">
                <h2>Thanks for submitting a quote!</h2>
                <div className="form-comp-btn-div">
                    <button className="form-comp-btn"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Submit Another?</button>
                    <button className="form-comp-btn"
                        onClick={() => this.nextPath('/Quote')}>
                        Get Your Quote</button>
                </div>
            </div>
            </>
        }
      </div>
    );
  }
  
  export default Form;
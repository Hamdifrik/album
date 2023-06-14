import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




const Blockquote = ({ quote }) => (
  <blockquote className="blockquote mt-3" style={{ width: '80%', color: '#333' }}>
    <p className='mb-0'>{quote?.body}</p>
    <footer className='blockquote-footer mt-2 float-right'>{quote?.author}</footer>
  </blockquote>
);

export default function Blocquote() {
  const API_URL = "https://favqs.com/api/qotd";
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setQuote(data.quote))
      .catch(error => console.log(error));
  };

  const handleOnClickFail = (e) => {
    e.preventDefault();
    throw new Error("Error - Application crashed");
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    fetchQuote()
  };

  return (
    <div className='row'>
      <div className='col-md-8 offset-2 mt-4'>
        <div className='d-flex justify-content-center'>
          <div className='d-grid gap-2'>
            <button type="button" className='btn btn-info btn-lg mb-2' onClick={handleOnClick}>Get Quote</button>
            <button type="button" className='btn btn-danger btn-lg' onClick={handleOnClickFail}>Get Quote</button>
            <p className="text-center"><small>Will throw an error</small></p>
          </div>
        </div>
        {/* blockquote */}
        <Blockquote  />
      </div>
    </div>
  );
}

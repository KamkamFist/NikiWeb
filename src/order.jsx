import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import './order.css';

function Order() {
  const navigate = useNavigate();

  

  return (
    <>
      <div id="up">
        <a className="button" 
          href="https://www.national-geographic.pl/tag/orangutany/" target='_blank'
          >
            queue
          </a>
          <button className="button" onClick={() => navigate('/order')}>
            order
          </button>
          <button className="button" onClick={() => navigate('/rules')}>
            Rules
          </button>
          <button className="button" onClick={() => navigate('/')}>
            Home
          </button>

    </div>

      <div id="down">
        <div id="dup">
          <h2>///</h2>

          <div id="Arts">
            xd cos tu kiedys bedzie
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;

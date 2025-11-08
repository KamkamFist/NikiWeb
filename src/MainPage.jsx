import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';

function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <div id="up">
        <h3>portfolio</h3>
        <h1>Hej, jestem kiciarozek</h1>
        <h3>graphic designer</h3>
      </div>

      <div id="down">
        <div id="dup">
          <div id="logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfy4ZRrqUV0wG9E5cgsDacACX5sALs0RhSw&s"
              alt="Logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div id="ddown">
          <button className="button" onClick={() => navigate('/cennik')}>
            See my works
          </button>
        </div>
      </div>
    </>
  );
}

export default MainPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';

function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <div id="up">
        <h3>Portfolio</h3>
        <h1>💕 Oficjalna strona Kicirożek 💕</h1>
        <h3>Projektant Graficzny</h3>
      </div>

      <div id="down">
        <div id="dup">
          <div id="logo">
            <img
              //src="https://cdn.discordapp.com/attachments/1384937250084622378/1439627594759803052/image.png?ex=691b352d&is=6919e3ad&hm=136c25c3d4b51850270da5a42af2281aa595d108fc537c02744a03eca4d4bcb3&"
              //alt="Logo"
              //style={{ maxWidth: '100%', height: 'auto', display: 'block', objectFit: 'contain', zIndex: 1 }}
            />
          </div>
        </div>

        <div id="ddown">
          <a className="buttons" onClick={() => navigate('/Art')}>
            Moje Prace
          </a>
          <a className="buttons" onClick={() => navigate('/prices')}>
            Cennik
          </a>
          <a className="buttons" onClick={() => navigate('/rules')}>
            Zasady
          </a>
        </div>
      </div>
    </>
  );
}

export default MainPage;

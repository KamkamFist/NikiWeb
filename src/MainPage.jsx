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
              src="https://cdn.discordapp.com/attachments/1384937250084622378/1439627594759803052/image.png?ex=691b352d&is=6919e3ad&hm=136c25c3d4b51850270da5a42af2281aa595d108fc537c02744a03eca4d4bcb3&"
              alt="Logo"
              style={{ width: '100%', height: '100%'}}
              id="logo"
            />
          </div>
        </div>

        <div id="ddown">
          <button className="button" onClick={() => navigate('/Art')}>
            Moje Prace
          </button>
          <button className="button" onClick={() => navigate('/prices')}>
            Cennik
          </button>
          <button className="button" onClick={() => navigate('/rules')}>
            Zasady
          </button>
        </div>
      </div>
    </>
  );
}

export default MainPage;

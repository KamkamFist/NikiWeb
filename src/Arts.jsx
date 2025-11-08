import { useNavigate } from 'react-router-dom';

import './Arts.css';
function Art() {
  const navigate = useNavigate();
  return (
    <>
    <div id="up">
        <button className="button" onClick={() => navigate('/insta')}>
            queue
          </button>
          <button className="button" onClick={() => navigate('/Art')}>
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
            <h2>My Arts</h2>
            <div id="Arts">
                <div class="p"><img class="photos" s width="100%" height="100%"/></div>
                <div class="p"></div>
                <div class="p"></div>
                <div class="p"></div>
                <div class="p"></div>
                <div class="p"></div>
            </div>
        </div>
    </div>
    </>
  )
;
}

export default Art;

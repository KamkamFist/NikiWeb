import { useNavigate } from 'react-router-dom';

import './Arts.css';
function Art() {
  const navigate = useNavigate();
  return (
    <>
    <div id="up">
                <a className="button"
                    href="https://www.national-geographic.pl/tag/orangutany/" target='_blank'
                >
                    Kolejka
                </a>
                <button className="button" onClick={() => navigate('/art')}>
                    Moje prace
                </button>
                <button className="button" onClick={() => navigate('/')}>
                    Strona główna
                </button>

            </div>
    <div id="down">
        <div id="dup">
            <h2>Moje prace</h2>
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

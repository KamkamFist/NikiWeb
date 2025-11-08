import './Arts.css';
import { useNavigate } from 'react-router-dom';

function Art() {
  const navigate = useNavigate();
  const photos = [
    {photo: "https://example.com/photo1.jpg", description: "Photo 1"},
  ]

  return (
    <>
    <div id="up">
        <button className="button" onClick={() => navigate('/insta')}>
            Queue
          </button>
          <button className="button" onClick={() => navigate('/prices')}>
            Order
          </button>
          <button className="button" onClick={() => navigate('/rules')}>
            Rules
          </button>
          <button className="button" onClick={() => navigate('/')}>
            Home🙀
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

import { useNavigate } from 'react-router-dom';
import './Arts.css';

const posts = [
  {
    url: "https://www.instagram.com/kicia.projects/p/DQ9522viJHt/",
    image: "https://cdn.discordapp.com/attachments/1384937250084622378/1439321358046593194/image.png?ex=691a17f9&is=6918c679&hm=a440db4b287a11ee10ee72db037a57608662bfcac34afbc9c89c2b46ccb57fb9&"
  },
  {
    url: "https://www.instagram.com/p/DOLGJpBCPt9/",
    image: "https://cdn.discordapp.com/attachments/1384937250084622378/1439322458594349178/image.png?ex=691a18ff&is=6918c77f&hm=4275ac40d96f34233cd7ee8afe759d75200d1277167e1eb8dc425cc27f89adf2&"
  },
  {
    url: "https://www.instagram.com/p/DOLF34sCNaz/",
    image: "https://cdn.discordapp.com/attachments/1384937250084622378/1439322518996385792/image.png?ex=691a190d&is=6918c78d&hm=2f51188f8f176cd967f7c97059ae6927a76d98af5c37576bd72b2ad844b25d61&"
  },
  {
    url: "https://www.instagram.com/p/DN0_uHHUBOZ/",
    image: "https://cdn.discordapp.com/attachments/1384937250084622378/1439322614022672546/image.png?ex=691a1924&is=6918c7a4&hm=f18e92574e231417e78c5f5b8bbb9bfc8a33b1f9c8f60d9a3edaf01ca67e5601&"
  },
  {
    url: "https://www.instagram.com/p/DN0_Avf0CdZ/",
    image: "https://cdn.discordapp.com/attachments/1384937250084622378/1439322654585786571/image.png?ex=691a192e&is=6918c7ae&hm=dba23d5ebf64fffce18d961cf77f8870803c1482d23f368744b42bc42074067b&"
  },
  {
    url: "https://www.instagram.com/p/DNIga37oyN0/",
    image: "https://cdn.discordapp.com/attachments/1384937250084622378/1439322845204185462/image.png?ex=691a195b&is=6918c7db&hm=3365a8e7a672cc87ee2fd279547476d6a23096a2ee6658df2782fb20cce703e4&"
  }
];

function Art() {
  const navigate = useNavigate();

  return (
    <>
      <div id="up">
        <a className="button" href="https://www.national-geographic.pl/tag/orangutany/" target='_blank'>
          Kolejka
        </a>
        <a className="button" onClick={() => navigate('/art')}>
          Moje prace
        </a>
        <a className="button" onClick={() => navigate('/')}>
          Strona główna
        </a>
      </div>

      <div id="down">
        <h2>Moje prace</h2>
        <div id="Arts">
          {posts.map((x) => (
            <a href={x.url} target="_blank"  key={x.url} className='art'>
              <img className="art" src={x.image} alt={`Post`} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Art;

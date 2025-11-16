import { useNavigate } from 'react-router-dom';
import './Prices.css';

function Prices() {
    const navigate = useNavigate();
    return (
        <>
            <div id="up">
                <a
                    className="button"
                    href="https://docs.google.com/spreadsheets/d/1oeHHenr98qEB24aevOxLfmq4n6sxtTfGnf3c5p4kaUE/edit?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Kolejka
                </a>
                <a className="button" onClick={() => navigate('/art')}>
                    Moje prace
                </a>
                <a className="button" onClick={() => navigate('/rules')}>
                    Zasady
                </a>
                <a className="button" onClick={() => navigate('/')}>
                    Strona Główna
                </a>
            </div>
            <div id="down">
                <h2>Cennik</h2>
                <div id="Prices">
                    <div className="section">
                        <img
                            src="https://cdn.discordapp.com/attachments/1384937250084622378/1439288699677573332/3No6acAAAAGSURBVAMA2IVKgSJVN0oAAAAASUVORK5CYII.png?ex=6919f98e&is=6918a80e&hm=28514ebc2aee4fb4dffd84803d7841716f9ccbd2e3dddc2b2cc367e9fc1b47bf&"

                            alt=""
                            style={{ height: "40vw" }}
                        />
                    </div>
                    <div className="section">
                        <img
                            src="https://cdn.discordapp.com/attachments/1384937250084622378/1439301603453702174/WsEbcgAAAAZJREFUAwCzFGytw6V6SAAAAABJRU5ErkJggg.png?ex=691a0593&is=6918b413&hm=71ec88c20a451e0984f24a1eda9b51a0b1b62a0f500edad7ba2f6038984d98a3&"

                            alt=""
                            style={{ height: "40vw" }}
                        />

                    </div>
                    <div className="section2">
                        <img
                            src="https://cdn.discordapp.com/attachments/1384937250084622378/1439302726734315782/jH9twAAAAAZJREFUAwAYHQ51id2MAAAAAABJRU5ErkJggg.png?ex=691a069f&is=6918b51f&hm=010ce572583d03c9bcf4bc642f6e7d74373d58ef8de352603232f2ad782061dc&"
                            alt="sdfsd"
                            style={{ width: "80vw" }}
                        />
                    </div>
                    <div id="Pricing">
                        <h2>Cennik dodatkowych elementów</h2>

                        <p><strong>Szczegółowe lub złożone tło:</strong> dostępne za dodatkową opłatą 5–10 PLN.</p>

                        <p><strong>Tło podstawowe:</strong> delikatny gradient lub subtelne wzorki, wliczone w cenę.</p>

                        <p><strong>Dodatki do postaci:</strong> wyceniane w zależności od poziomu trudności i ilości, zazwyczaj 2–5 PLN.</p>

                        <h2>EDYCJE ZDJĘĆ</h2>

                        <p><strong>Pojedyncza praca</strong> kosztuje 5pln</p>
                        <p><strong>Istnieje możliwość wykupienia miesięcznego pakietu</strong> za 15pln, w którym do wykorzystania jest 8 edytowanych zdjęć. ( Zdjęcia mogą przejść na następny miesiąc jeśli się nie zdąży wykorzystać wszystkich. )</p>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Prices;
import { useNavigate } from 'react-router-dom';
import './Rules.css';

function Rules() {
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
                    <h2>Zasady</h2>
                    <div id="Rules">

<h2>PŁATNOŚĆ</h2>
<p>1.1 Po akceptacji szkicu przez klienta należy wpłacić 5-15% zaliczki w zależności od rozmiaru projektu, na koniec wykonanej pracy dopłacić umówioną kwotę.</p>
<p>1.2 Przyjmuję płatność tylko BLIK.</p>
<p>1.3 Za rozpoczętą i ukończoną pracę nie zwracam kosztów.</p>
<p>1.4 Termin opłacenia zamówienia to 48h od potwierdzenia.</p>

<h2>CZAS REALIZACJI</h2>
<p>2.1 Na wykonanie każdej pracy przewiduję czas maksymalnie 10 dni (w tym moje weekendy).</p>
<p>2.2 Termin może się wydłużyć z powodów zdrowotnych/losowych, o czym klient zostanie poinformowany.</p>
<p>2.3 Kolejność realizacji według kolejki zgłoszeń.</p>

<h2>ZMIANY I POPRAWKI</h2>
<p>3.1 Poprawki po zakończonej pracy i zatwierdzeniu jej są płatne.</p>
<p>3.2 Nie wykonuję tysięcznych zmian w pracy.</p>

<h2>MATERIAŁY</h2>
<p>4.1 Klient dostarcza wyraźne opisy/zdjęcia wytyczne.</p>
<p>4.2 Brak możliwości "zgadywania" wyglądu, jeśli referencje są niepełne.</p>

<h2>STYL</h2>
<p>5.1 Zamówienie jest wykonane w moim stylu, brak próśb o kopiowanie cudzej pracy lub stylu innego artysty.</p>

<h2>UDOSTĘPNIANIE</h2>
<p>6.1 Zezwalam sobie publikować pracę w portfolio/social media (chyba, że klient poprosi wcześniej o brak publikacji).</p>
<p>6.2 Klient otrzymuje plik cyfrowy – nie otrzymuje praw do edycji ani odsprzedaży.</p>

<h2>PRAWA AUTORSKIE</h2>
<p>7.1 Zachowuję swoje prawa autorskie.</p>
<p>7.2 Odsprzedaż moich prac lub wykorzystywanie ich komercyjnie jest możliwe wyłącznie za moją zgodą.</p>
<p>7.3 Przed dokonaniem pełnej zapłaty wysyłam wersję z znakiem wodnym, po uregulowaniu opłaty wersję bez znaku wodnego.</p>

<h2>KOMUNIKACJA</h2>
<p>8.1 Kontakt ze mną odbywa się tylko przez wskazaną platformę (np. Instagram/mail).</p>
<p>8.2 Wulgaryzmy lub brak szacunku = przerwanie współpracy.</p>
<p>8.3 Nie życzę sobie próśb o aktualizacje dotyczące etapów realizowania pracy. O wszystkich aktualizacjach informuję sama.</p>
<p>8.4 Nadmierne ponaglanie, nacisk lub nieuprzejme wiadomości mogą skutkować anulowaniem zlecenia.</p>
<p>8.5 Kontaktuję się w godzinach swojej pracy, proszę o cierpliwość przy oczekiwaniu na odpowiedź.</p>

<h2>ZASTRZEŻENIA</h2>
<p>Zastrzegam sobie prawo do odmowy każdego projektu, który nie jest zgodny z moim stylem, zakresem prac lub komfortem. (Jeśli odmowa nastąpi po wpłacie, pieniądze zostaną zwrócone.)</p>


                    </div>
                </div>
            </div>
        </>
    );
}
export default Rules;
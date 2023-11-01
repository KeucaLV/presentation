import "./KadIzmanto.css";

function KadiElementi(){
    return (
        <div className="mainKad">
            <div className="titleKadi">
                <h1>kādi UML elementi ir šajā diagrammā?</h1>
            </div>
            <div className="boxKadi">
                <div className="textKadi">
                    <h2 className="virs">Use Case (Lietošanas gadījums):</h2>
                    <article className="elementi">
                         Lietošanas gadījums ir galvenais elements Use Case Diagrams. Tas attēlo konkrētu sistēmas funkcionalitāti vai uzdevumu, ko var izpildīt lietotāji. Lietošanas gadījumu parasti apraksta ar tekstualiem aprakstiem vai izmantotājiem draudzīgiem vārdiem.
                    </article>
                    <h2 className="virs">Actor (Aktieris):</h2>
                    <article className="elementi">
                         Aktieris ir ārējais lietotājs vai sistēma, kas mijiedarbojas ar sistēmu. Aktieris var būt cilvēks, citas sistēmas vai pat cita lietošanas gadījuma instances.
                    </article>
                    <h2 className="virs">Association (Asociācija):</h2>
                    <article className="elementi">
                         Asociācijas līnija savieno aktieri ar lietošanas gadījumiem, norādot, kāds aktieris ir saistīts ar kādu konkrētu lietošanas gadījumu.
                    </article>
                    <h2 className="virs">Include Relationship (Iekļaušanas attiecības): </h2>
                    <article className="elementi">
                        Šis elements norāda, ka viens lietošanas gadījums iekļauj citu lietošanas gadījumu. Tas parasti tiek izmantots, lai norādītu, ka viens lietošanas gadījums izsauc citu lietošanas gadījumu kā daļu no savas darbības.
                    </article>
                    <h2 className="virs">Extend Relationship (Paplašināšanas attiecības):</h2>
                    <article className="elementi">
                         Šis elements norāda, ka viens lietošanas gadījums var paplašināties ar papildu darbībām citos lietošanas gadījumos. Tas tiek izmantots, lai aprakstītu izņēmuma situācijas vai papildu funkcionalitāti, kas var tikt aktivizēta, ja noteiktā nosacījumu izpildās.
                    </article>
                    <h2 className="virs">Generalization (Vispārināšana):</h2>
                    <article className="elementi">
                         Šis elements norāda vispārinātu vai specifikātu attiecību starp aktieriem. Tas norāda, ka viens aktieris ir vispārinājums (piemēram, "Lietotājs"), bet citi aktieri ir specifikācijas (piemēram, "Administrators", "Klienti").
                    </article>
                </div>
            </div>
        </div>
    );
}

export default KadiElementi;
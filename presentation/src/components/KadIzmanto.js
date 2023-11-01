import "./KadIzmanto.css";

function KadIzmanto(){
    return (
        <div className="mainKad">
            <div className="titleKad">
                <h1>kad to izmanto?</h1>
            </div>
            <div className="boxKad">
                <div className="textKad">
                    <article>
                        "Use Case Diagram" ir viena no UML (Unified Modeling Language) diagrammām,
                        kas tiek izmantotas programmatūras inženierijā, lai modelētu sistēmas funkcionālos prasību un to,
                        kā lietotāji mijiedarbojas ar sistēmu. Use Case Diagrams ir ļoti noderīgi,
                        lai vizualizētu sistēmas galvenās darbības,
                        to, kā tā mijiedarbojas ar citām sistēmām vai lietotājiem,
                        un kāda veida funkcionalitāti tā piedāvā end lietotājiem.
                    </article>
                </div>
                <div>
                    <img className="photoKad" src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/UML-use-case-diagram-examples/UML_Use_Case_Image.png" alt="nav"/>
                </div>
            </div>
        </div>
    );
}

export default KadIzmanto;
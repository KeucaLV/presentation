import "./KadIzmanto.css";
import image from "./blogDiagram.drawio.png";
function Punkts5(){
    return (
        <>
            <div className="mainKad">
                <div className="titleKad">
                    <h1>kā šī diagramma izskatās Bloga gadījumā?</h1>
                </div>
                <div className="flex-row">
                    <div className="boxKad">
                        <div className="textKad">
                            <h1>Ja jāizveido Use State diagramma saistībā ar mūsu veidoto
                                Blog lapu tad tā varētu izskatīties šādi</h1>
                        </div>
                    </div>
                    <img alt="diagramaa" className="image" src={image}></img>
                </div>
            </div>
        </>
    );
}

export default Punkts5;
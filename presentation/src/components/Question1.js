import React from "react";
import "./mainStyles.css";
function Question1(){
    return (
        <div className="mainKad">
            <div className="titleMainBox">
                <div className="titleKad">
                    kas tā ir un vai tā ir struktūras vai uzvedības modeļa daļa?
                </div>
            </div>
            <div className="satur">
                <div className="textKad">
                    Use case diagramma ir viens no UML (Unified Modeling Language) diagrammu veidiem, ko izmanto, lai vizualizētu sistēmas funkcionālās prasības un to, kā dažādi lietotāji vai sistēmas komponenti mijiedarbojas ar sistēmu.
                </div>

                <div className="textKad2">
                    <div className="boxHeading">Use case diagramma ietver divus galvenos elementus:</div>
                    <div className="textBox1">
                        <span>Aktori:</span> Aktori ir personas, sistēmas komponenti vai citi ārējie elementi, kas mijiedarbojas ar sistēmu, lai izpildītu konkrētus uzdevumus vai darbības.
                    </div>
                    <div className="textBox1">
                        <span> Lietojuma gadījumi: </span>Lietojuma gadījumi ir konkrētas funkcionalitātes vai darbības, ko sistēma nodrošina, lai apmierinātu kāda aktora vajadzības.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Question1;
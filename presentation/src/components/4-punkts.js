import "./KadIzmanto.css";

function Punkts4(){
    return (
        <>
        <div className="mainKad">
            <div className="titleKad">
                <h1>kāds ir piemērs ar skaidrojumu?</h1>
            </div>
            <div className="flex-row">
                <div className="boxKad">
                    <div className="textKad">
                        <article className="center">
                            <h1>Piemērs: Online Shopping</h1>
                            <div className="flex-row">
                                    <div className="flex-column">
                                        <h2>Autori:</h2>
                                        <p>Lietotājs;</p>
                                        <p> Pircējs</p>
                                    </div>
                                <div className="flex-column">
                                    <h2>
                                        Use Case:
                                    </h2>
                                    <p>
                                        Pārlūkot produktus;
                                    </p>
                                    <p>
                                        Meklēt produktus;
                                    </p>
                                    <p>
                                        Pievienot grozā;
                                    </p>
                                    <p>
                                        Apmaksa;
                                    </p>
                                    <p>
                                        Menedžēt produktus;
                                    </p>
                                </div>

                                    <div className="flex-column">
                                        <h2>Relācijas</h2>
                                        <h3>Pircējs izmanto: </h3>
                                        <p>Apmaksu;</p>
                                        <p>Pārlūkot produktus;</p>
                                        <p>Meklēt produktus;</p>
                                        <p>Pievienot grozā;</p>
                                        <h3>Administrators izmanto:</h3>
                                        <p>Produktu Menedžēšanu</p>
                                    </div>
                            </div>
                            <h1>Šī diagramma sniedz augsta līmeņa priekšstatu par sistēmas funkcionalitāti un to, kā ārējie dalībnieki ar to mijiedarbojas. Tas palīdz ieinteresētajām personām izprast sistēmas darbību, neiedziļinoties tehniskajās detaļās.</h1>
                        </article>
                    </div>
                </div>
                    <div className="boxKad">
                        <div className="textKad">
                            <img alt="diagrama" src="https://www.uml-diagrams.org/examples/use-case-example-online-shopping.png"></img>
                        </div>
                        <div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Punkts4;
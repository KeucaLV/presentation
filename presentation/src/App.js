
import KadIzmanto from "./components/KadIzmanto";
import KadiElementi from "./components/KadiElementi";
import MainPage from "./components/MainPage";
import Punkts4 from "./components/4-punkts";
import Punkts5 from "./components/5-punkts";
import Question1 from "./components/Question1";
function App() {
  return (
    <div className="App">
        <MainPage />
        <Question1 />
        <KadIzmanto />
      <KadiElementi />
        <Punkts4 />
        <Punkts5 />
    </div>

  );
}

export default App;

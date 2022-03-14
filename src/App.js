import Header from "./Header";
import Maindiv from "./Maindiv";
import Gameplay from "./Gameplay";
import Latestarcive from "./Latestarcive";
import Howtoplay from "./Howtoplay";
import Footer from "./Footer";
import Modal from "./Modal";
import Stake from "./Stake";
import TheTLDRHowToPlay from "./TheTLDRHowToplay";

function App() {
  return (
    <div className="App">
      <Header />
      <Maindiv />
      <Gameplay />
      <Latestarcive />
      <Stake />
      <TheTLDRHowToPlay />
      <Howtoplay />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;

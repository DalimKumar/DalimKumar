import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Modal from "./Modal";
import Stake from "./Stake";
import TheTLDRHowToPlay from "./TheTLDRHowToplay";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/stake" element={<Stake />}></Route>
          <Route path="/howtoplay" element={<TheTLDRHowToPlay />}></Route>
        </Routes>

        <Footer />
        <Modal />
      </BrowserRouter>
    </div>
  );
}

export default App;

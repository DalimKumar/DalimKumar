import "bootstrap/dist/css/bootstrap.min.css";
import Connect from "./Components/Connect/Connect";
import Menubar from "./Components/Menubar/Menubar";
import Mint from "./Components/Mint/Mint";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WrongWallet from "./Components/WrongWallet/WrongWallet";
import styled from "styled-components";
import ContextProvider from "./Components/Context";
import Minting from "./Components/Minting/Minting";
import MintSucessFull from "./Components/MintSuccesFull/MintSuccesFull";
import MyCollection from "./Components/MyCollection/MyCollecton";
import Dashboard from "./Components/Dashboard/Dashboard";
import Develope from "./Components/Develope/Develope";
import AllNft from "./Components/Develope/AllNft";
import Developing from "./Components/Developing/Developing";
import PopupConfirmation from "./Components/Develope/PopupConfirmation";
const Wrapper = styled.div``;
function App() {
  return (
    <Wrapper>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Connect />}></Route>
            <Route path="/mint" element={<Mint />}></Route>
            {/* <Route path="/wrongwallet" element={<WrongWallet />}></Route>
           
            <Route path="/minting" element={<Minting />}></Route> */}
            {/* <Route path="/" element={<MintSucessFull />}></Route> */}
            {/* <Connect /> */}
            {/* <Route path="/collection" element={<MyCollection />}></Route> */}
            {/* <Route path="/" element={<Develope />}></Route> */}
            {/* <Route path="/allnft" element={<AllNft />}></Route> */}
            {/* <Route path="/developing" element={<Developing />}></Route> */}
            {/* <Route path="/" element={<Develope />}></Route> */}
            {/* <Route path="/" element={<PopupConfirmation />}></Route> */}
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </Wrapper>
  );
}

export default App;

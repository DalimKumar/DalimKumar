import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Video from "./Components/Video/Video";
import Join from "./Components/Join/Join";
import PokerSharks from "./Components/PokerSharks/PokerSharsks";

import Team from "./Components/Team/Team";
import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LaunchGivewayAndRoadMap from "./Components/LaunchGiveway/LaunchGivewayAndRoadMap";
import { useEffect } from "react";
function App() {
  const launchGiveWays = [
    {
      title: "25% SOLD",
      text1: "SHARK LOUNGE",
      text2: "WSOP Main Event ",
    },
    {
      title: "50% SOLD",
      text1: "GTO TRAINING APP",
      text2: "(1 Year DTO)",
    },
    {
      title: "75% SOLD",
      text1: "FREEROLL TOURNAMENT",
      text2: "Vote 4 Location",
    },
    {
      title: "100% SOLD",
      text1: "3D SHARK AVATARS",
      text2: "(Fully Rigged)",
    },
  ];
  const roadmap = [
    { title: "Q2 2022", text1: "3D SHARK EVOLUTION", text2: "Avatar Airdrop" },
    { title: "Q3 2022", text1: "SHARK LOUNGE", text2: "WSOP Main Event" },
    { title: "Q3 2022", text1: "EXCLUSIVE MERCH", text2: "Store Launch" },
    { title: "Q4 2022", text1: "MUAY THAI RETREAT", text2: "THAILAND (CAP30)" },
    { title: "Q1 2022", text1: "WIM HOF RETREAT", text2: "POLAND (CAP30)" },
    { title: "Q2 2022", text1: "SHARK LOUNGE", text2: "WSOP Main Event" },
    {
      title: "Q4 2022",
      text1: "YOGA/MEDITATION ",
      text3: "RETREAT",
      text2: "BALI (CAP30)",
    },
  ];
  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 2000,
      easing: "ease",
    });
  });
  return (
    <>
      <Header />
      <HeroSection />
      <Video />
      <Join />
      <PokerSharks />
      <LaunchGivewayAndRoadMap
        title="LAUNCH GIVEAWAYS"
        data={[...launchGiveWays]}
        id="launchmap"
        img="./images/big_shark.png"
      />
      <LaunchGivewayAndRoadMap
        title="PROJECT ROADMAP"
        data={[...roadmap]}
        id="projectmap"
        img2="images/small_shark.svg"
        padding={true}
      />
      <Team />
      <Faq />
      <Footer />
    </>
  );
}

export default App;

import React, { useState, useContext } from "react";

const Context = React.createContext({});
const ContextProvider = ({ children }) => {
  const [mint, setMint] = useState(false);
  const [mintSuccess, setMintSuccess] = useState();
  const [navbar, setNavbar] = useState(null);
  const [showingType, setShowingType] = useState(false);
  const [firstNft, setFirstNft] = useState();
  const [secondNft, setSecondNft] = useState();
  const [showNft, setShowNft] = useState(false);

  return (
    <Context.Provider
      value={{
        navbar,
        setNavbar,
        mint,
        setMint,
        mintSuccess,
        setMintSuccess,
        showingType,
        setShowingType,
        firstNft,
        setFirstNft,
        secondNft,
        setSecondNft,
        showNft,
        setShowNft,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useMyContext = () => useContext(Context);
export default ContextProvider;

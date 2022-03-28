import React, { useState, useContext } from "react";

const Context = React.createContext({});
const ContextProvider = ({ children }) => {
  const [navbar, setNavbar] = useState(null);
  const [showingType, setShowingType] = useState(false);
  const [firstNft, setFirstNft] = useState();
  const [secondNft, setSecondNft] = useState();

  return (
    <Context.Provider
      value={{
        navbar,
        setNavbar,
        showingType,
        setShowingType,
        firstNft,
        setFirstNft,
        secondNft,
        setSecondNft,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useMyContext = () => useContext(Context);
export default ContextProvider;

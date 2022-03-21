import { createContext, useState, useContext } from "react";

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [value, setState] = useState([1.5]);
  const cardArray = [
    {
      id: "Niche",
      className: "py-3",
      btntext: "Get Niche Edits",
      title: "NicheEdits",
      img: "/NICHE EDITS.jpg",
      description:
        "Niche Edits that have a DR of 30+ and 100+ Organic Visitors on the page that contains your link. ",
      click: 1.5,
    },
    {
      id: "Niche",
      className: "py-3",
      btntext: "Get Guest Posts",
      title: "GuestPosts",
      img: "/GUEST POSTS.jpg",
      description:
        "Niche Edits that have a DR of 30+ and 100+ Organic Visitors on the page that contains your link. ",
      click: 2,
    },
    {
      id: "Niche",
      className: "py-3",
      btntext: "Get Digital PR",
      title: "DigitalPR",
      img: "/DIGITAL PR.jpg",
      description:
        "Niche Edits that have a DR of 30+ and 100+ Organic Visitors on the page that contains your link. ",
      click: 3,
    },
  ];

  return (
    <Context.Provider value={{ value, setState, cardArray }}>
      {children}
    </Context.Provider>
  );
};
export const myContext = () => useContext(Context);
export default ContextProvider;

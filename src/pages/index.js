import HeadComponent from "../components/HeadComponent/HeadComponent";
import Data from "../components/Data/Data";
import { useState } from "react";
// import PlaceCards from "../components/PlaceCards/PlaceCards";
import Card from "../components/Card/Card";
import UpperFilter from "../components/UpperFIlter/UpperFilter";

const Home = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((value) => value.category))];

  return (
    <>
      <HeadComponent />
      <UpperFilter setItem={setItem} menuItems={menuItems} />
      {/* <PlaceCards /> */}
      <Card item={item} />
    </>
  );
};

export default Home;

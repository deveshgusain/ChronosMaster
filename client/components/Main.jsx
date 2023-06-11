import React from "react";

// Components
import AddHouse from "./AddHouse";
import HouseList from "./HouseList";

import { useDispatch } from "react-redux";
import { fetchHouses } from "../features/house/houseSlice";

export default function Main() {
  const dispatch = useDispatch();
  dispatch(fetchHouses());

  return (
    <div>
      <AddHouse />
      <HouseList />
    </div>
  );
}

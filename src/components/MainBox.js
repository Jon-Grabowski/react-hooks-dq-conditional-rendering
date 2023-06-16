import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {

  const [page, setPage] = useState("")

  function handleClick(selection) {
    console.log(selection)
    setPage(selection)
  }

  function detailsToDisplay(){
    if (page === "user") {
      return <Profile />
    } else if (page === "photo"){
      return <Photos />
    } else if (page === "cocktail") {
      return <Cocktails />
    } else if (page === "pokemon") {
      return <Pokemon />
    }
  }




  return (
    <div>
      <MenuBar handleClick={handleClick} state={page}/>
      {detailsToDisplay()}
    </div>
  );
}

export default MainBox;

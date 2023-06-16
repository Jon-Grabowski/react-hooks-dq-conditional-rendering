import React from "react";

function MenuBar({handleClick, state}) {


  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  return (
    <div className="ui four item menu">
      <span id = "user" className={state === "user" ? "item active" : "item"} onClick={() => handleClick("user")}>
        <i className="user large icon" />
      </span>

      <span id="photo" className={state === "photo" ? "item active" : "item"} onClick={() => handleClick("photo")}>
        <i className="photo large icon" />
      </span>

      <span id="cocktail" className={state === "cocktail" ? "item active" : "item"} onClick={() => handleClick("cocktail")}>
        <i className="cocktail large icon" />
      </span>

      <span id="pokemon" className={state === "pokemon" ? "item active" : "item"} onClick={() => handleClick("pokemon")}>
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;

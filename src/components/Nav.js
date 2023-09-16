import React from "react";
import MoonImg from "../images/moon-icon.svg";

function Nav() {
  return (
    <nav className="nav-bar">
      <h1>Where in the world?</h1>
      <div className="dark-mode-div">
        <img className="moon-img" src={MoonImg} alt="dark-mode" />
        <p>Dark mode</p>
      </div>
    </nav>
  );
}

export default Nav;
/* change the moon icon to a lighter stroke*/
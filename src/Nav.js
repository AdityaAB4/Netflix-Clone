import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://seeklogo.com/images/N/netflix-logo-DD40971CE6-seeklogo.com.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4LPO7sxkfm8reXDxaUx5mJRpDU2_YVclguw&usqp=CAU"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;

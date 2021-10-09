import { useEffect, useState } from "react";
import Toggle from "react-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import useDarkMode from "../hooks/useDarkMode";

import "react-toggle/style.css";
import "../../public/toggle.css";

function ModeToggle() {
  const [darkMode, setDarkMode] = useDarkMode();
  console.log("darkMode", darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList = "theme-dark";
    } else {
      document.documentElement.classList = "";
    }
  }, [darkMode]);

  return (
    <div className="ModeToggle">
      <label>
        <Toggle
          defaultChecked={darkMode}
          className="mode-toggle"
          icons={{
            checked: (
              <FontAwesomeIcon icon={faMoon} className="toggle-icon moon" />
            ),
            unchecked: (
              <FontAwesomeIcon icon={faSun} className="toggle-icon sun" />
            ),
          }}
          onChange={(e) => {
            setDarkMode(!darkMode);
          }}
        />
      </label>
    </div>
  );
}

export default ModeToggle;

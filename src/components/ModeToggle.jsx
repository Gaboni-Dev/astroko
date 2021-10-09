import { useEffect, useState } from "react";
import Toggle from "react-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import "react-toggle/style.css";
import "../../public/toggle.css";

function ModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log("isDarkMode", isDarkMode);

  const setMode = () => {
    setIsDarkMode((e) => {
      setIsDarkMode(!e);
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList = "theme-dark";
    } else {
      document.documentElement.classList = "";
    }
  });

  return (
    <div className="ModeToggle">
      <label>
        <Toggle
          defaultChecked={isDarkMode}
          className="mode-toggle"
          icons={{
            checked: (
              <FontAwesomeIcon icon={faMoon} className="toggle-icon moon" />
            ),
            unchecked: (
              <FontAwesomeIcon icon={faSun} className="toggle-icon sun" />
            ),
          }}
          onChange={setMode}
        />
      </label>
    </div>
  );
}

export default ModeToggle;

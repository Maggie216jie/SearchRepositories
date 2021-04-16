import React from "react";

const Header = props => {
  const { toggleValue, setToggleValue } = props;

  return (
    <div className="header-container">
      <div className="header-text">Search GitHub Repositories</div>
      <div className="toggle-button-container">
        {toggleValue ? (
          <span className="theme-label">Dark Theme On</span>
        ) : (
          <span className="theme-label">Light Theme On</span>
        )}

        <label className="switch">
          <input
            type="checkbox"
            name={"toggle"}
            checked={String(toggleValue) == "true"}
            onChange={evt => setToggleValue(evt.target.checked)}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Header;

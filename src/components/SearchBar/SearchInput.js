import React from "react";
import PropTypes from "prop-types";

const SearchInput = props => {
  const { inputValue, setInputValue, placeholder } = props;

  return (
    <div className="search-bar-part">
      <input
        type="text"
        placeholder={placeholder}
        aria-label="Type Username to Search"
        value={inputValue}
        onChange={evt => setInputValue(evt.target.value)}
      />
    </div>
  );
};

SearchInput.propTypes = {
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
  placeholder: PropTypes.string
};

export default SearchInput;

import React, {useState} from "react";
import SelectArrow from "../../assets/svg/select-arrow.svg";
import "./customSelect.sass";
import PropTypes from "prop-types";

const CustomSelect = ({sortValue,onSelectValue}) => {
  const [selected, setSelected] = useState(sortValue);
  const [showValues, setShowValues] = useState(false);
  const values = ["A-Z", "Z-A"];

  const handleSelect = (value) => {
    setSelected(value);
    setShowValues(false);
    onSelectValue(value);
  }

  return (
    <div className="select-container">
      <div className="custom-select">
        <div className="selected" onClick={() => setShowValues(!showValues)}>
          <span>Sırala {selected}</span>
          <img src={SelectArrow} alt="arrow" className={`select-arrow ${showValues ? "active" : ""}`}/>
        </div>
      </div>
      {showValues && (
        <div className="selectbox-container">
          {values?.map((item, index) => (
            <div className="selectbox-values" key={index} onClick={() => handleSelect(item)}>Sırala {item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;

CustomSelect.propTypes = {
  sortValue: PropTypes.string.isRequired,
  onSelectValue: PropTypes.func.isRequired
};

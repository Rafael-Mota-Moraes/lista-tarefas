import React from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";

import "./Form.css";

export default function Form({ handleSubmit, inputMudou, novaTarefa }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input onChange={inputMudou} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  inputMudou: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired
};

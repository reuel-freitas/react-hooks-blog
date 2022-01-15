import React from 'react';
import P from 'prop-types';

export const Input = ({ handleChange, searchValue = '' }) => (
  <input
    type="search"
    onChange={handleChange}
    value={searchValue}
    placeholder="Type to search..."
    autoFocus
    style={styles.input}
  />
);

Input.propTypes = {
  handleChange: P.func.isRequired,
  searchValue: P.string.isRequired,
};

const styles = {
  input: {
    marginTop: 20,
    width: 220,
    height: 30,
    padding: 10,
  },
};

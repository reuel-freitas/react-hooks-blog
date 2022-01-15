import P from 'prop-types';
import React from 'react';

export const Button = ({ onClick, description, disabled }) => (
  <button onClick={onClick} style={styles.button} disabled={disabled}>
    {description}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  onClick: P.func.isRequired,
  description: P.string.isRequired,
  disabled: P.bool.isRequired,
};

const styles = {
  button: {
    maxWidth: 220,
    width: '100%',
    height: 30,
    padding: 3,
    borderRadius: 17,
  },
};

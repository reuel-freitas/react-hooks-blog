import React from 'react';
import P from 'prop-types';

export const Warning = ({ msg }) => <p style={styles.p}>{msg}</p>;

Warning.propTypes = {
  msg: P.string.isRequired,
};

const styles = {
  p: { color: '#eee' },
};

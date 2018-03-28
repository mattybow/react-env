import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};

const TextInput = (props) => {
  return (
    <input
      type="text"
      style={{
        fontSize: '3rem',
        padding: '1.5rem 2rem',
        outline: 'none',
        borderRadius: '.5rem',
        WebkitAppearance: 'none'
      }}
      {...props} />
  )
};

TextInput.proptypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;

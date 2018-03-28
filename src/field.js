import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {
  validate: [],
};

function evalAllTrue(fns){
  // console.log(fns);
  return (val) => {
    return fns.find(fn =>{
      return fn(val) === false;
    }) ? false : true;
  }
}

function noNull(val) {
  return val !== null && val !== '';
}

function makeChangeHandler(customFn){
  return (e) => {
    defaultChangeHandler(e);
    const isValid = customFn(e.target.value);
    console.log('isValid', isValid);
  }
}

function defaultChangeHandler(e){
  console.log(e.target.value)
}

const Field = ({
  children,
  notNull,
  component: Component,
  validate,
  ...props }) => {
  if(children){
    return React.cloneElement(
      children,
      {
        ...props,
        onChange: notNull || validate.length
        ? makeChangeHandler(evalAllTrue(validate.concat(notNull ? noNull : [])))
        : defaultChangeHandler,
      });
  }
  return <Component {...props}/>
};

Field.proptypes = propTypes;
Field.defaultProps = defaultProps;

export default Field;

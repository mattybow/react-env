import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from './field';
import TextInput from './textInput';

const propTypes = {};
const defaultProps = {};

class TestForm extends Component {
  submitHandler(e) {
    e.preventDefault();
    alert('submit');
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <Field
          a="asdf"
          notNull
          validate={[
            (val) => val === 'apples'
          ]}>
          <TextInput />
        </Field>
        {/* <Field
          a="asdf"
          component={TextInput}/> */}
      </form>
    );
  }
}

TestForm.proptypes = propTypes;
TestForm.defaultProps = defaultProps;

export default TestForm;

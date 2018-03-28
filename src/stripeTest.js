import React, { Component } from 'react';
import {StripeProvider, Elements, injectStripe, CardElement} from 'react-stripe-elements';
import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};

class ChkOut extends Component {
  render() {
    return <CardElement />
  }
}

const InjectedChkOut = injectStripe(ChkOut);

const Checkout = () => (
  <Elements>
    <InjectedChkOut/>
  </Elements>
)

class StripeTest extends Component {
  render() {
    return (
      <StripeProvider  apiKey="pk_test_12345">
        <Checkout/>
      </StripeProvider>
    );
  }
}

StripeTest.proptypes = propTypes;
StripeTest.defaultProps = defaultProps;

export default StripeTest;

import React from 'react';
import { connect } from 'react-redux';
import { navigateTo } from '../store/actions';
import FourOhFour from '../components/FourOhFour';

const FourOhFourContainer = props => <FourOhFour {...props} />;

export default connect(null, { navigateTo })(FourOhFourContainer);

import PropTypes from 'prop-types';
import React from 'react';

const App = props => (
  <div>
  	<div> A global Nav here </div>
    { props.children }
  </div>

);
App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: [],
};

export default App;

import PropTypes from 'prop-types';
import React from 'react';

const App = props => (
  <div>
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

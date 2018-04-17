import PropTypes from 'prop-types';
import React from 'react';

const Card = props => {
	const { product, ratingsWithFilters, sentimentWithFilters } = props.data;
	
	return (
	  <div className="productContainer">
	    { product.name }
	  </div>

	)};
Card.propTypes = {
  data: PropTypes.object,
};

Card.defaultProps = {
  data: {},
};

export default Card;

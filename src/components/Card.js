import PropTypes from 'prop-types';
import React from 'react';

const Card = props => {
	const { product, ratingsWithFilters, sentimentWithFilters } = props.data;
	console.log(props.data);
	return (
	  <div className="productContainer">
	    <div className="section topSection"> 
	    	<div className="topImage"> <img className="imageStyle" src={product.images[0].desktop} /> </div>
	    	<div className="topData">
	    	 <div>{product.name}</div>
	    	 <div>
	    	 	<span> {product.price} </span> 
	    	 	<span> {product.colors} </span> 
	    	 </div>
	    	 </div>
	    	<div className="topPercentile"> 
	    		<div id="score">{Math.round(sentimentWithFilters.makersights_score)}</div>
	    		<div> {Math.round(sentimentWithFilters.percentile)} percentile </div>

	    	</div>
	    </div>
	    <div className="section middleSection">

	    </div>
	    <div className="section thirdSection">

	    </div>
	    <div className=" section bottomSection">

	    </div>
	  </div>
	)};
Card.propTypes = {
  data: PropTypes.object,
};

Card.defaultProps = {
  data: {},
};

export default Card;

import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
// import Chart from './Chart';

const Card = props => {
	const { product, ratingsWithFilters, sentimentWithFilters } = props.data;
	return (
	  <div className="productContainer">
	    <div className="section topSection"> 
	    	<div className="topImage"> <img className="imageStyle" src={product.images[0].desktop} /> </div>
	    	<div className="topData">
	    	 <div>{product.name}</div>
	    	 <div className="bubbleContainer">
	    	 	<span className="bubble"> {product.price} </span> 
	    	 	<span className="bubble"> {product.colors} </span> 
	    	 </div>
	    	 </div>
	    	<div className="topPercentile"> 
	    		<div id="score">{Math.round(sentimentWithFilters.makersights_score)}</div>
	    		<div> {Math.round(sentimentWithFilters.percentile)} percentile </div>

	    	</div>
	    </div>
	    <div className="section middleSection">
	    <div className="detractors"> 
	    	<div className="inline"> Detractors</div>
	    	<div className="inline"> 2% </div>
	    </div>
	    <div className="graph">
	    	{/*<div className="inline"> <Chart data={ratingsWithFilters} /></div>*/}
	    	<div> Chart Here </div>
	    </div>
	    <div className="advocates">
	    	<div className="inline">Advocates</div>
	    	<div className="inline"> 47% </div>
	    </div>

	    </div>
	    <div className="section thirdSection">
	    	<div className="score rightBorder">
	    		<div className="sphere">96</div>
	    		<div className="smallWords"> Millenials </div>
	    	</div>
	    	<div className="score rightBorder">
	    		<div className="sphere">86</div>
	    		<div className="smallWords"> Fashion Forward </div>
	    	</div>
	    	<div className="score">
	    		<div className="sphere">68</div>
	    		<div className="smallWords"> Repeat Customers </div>
	    	</div>
	    </div>
	    <div className=" section bottomSection">
	    	<div className="linkContainer"> <Link to="/"> View More </Link></div>
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

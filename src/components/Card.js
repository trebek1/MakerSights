import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
// import Chart from './Chart';

const Card = props => {
	const { product, ratingsWithFilters, sentimentWithFilters } = props.data;
	return (
	  <div className="productContainer">
	    <div className="section topSection clearfix"> 
	    	<div className="topImage"> <img className="imageStyle" src={product.images[0].desktop} /> </div>
	    	<div className="topData">
	    	 <div className="productName truncate">{product.name}</div>
	    	 <div className="bubbleContainer">
	    	 	<span className="bubble"> ${product.price}.00 </span> 
	    	 	<span className="bubble"> {product.colors} </span> 
	    	 </div>
	    	 </div>
	    	<div className="topPercentile"> 
	    		<div id="topScore">{Math.round(sentimentWithFilters.makersights_score)}</div>
	    		<div id="topPercentile"> {Math.round(sentimentWithFilters.percentile)} percentile </div>

	    	</div>
	    </div>
	    <div className="section middleSection clearfix">
	    <div className="detractors"> 
	    	<div className="subtitle"> Detractors</div>
	    	<div>
	    		<span className="percentageValue"> 2 </span> 
	    		<span className="percentage"> % </span>
	    	</div>
	    </div>
	    <div className="graph">
	    	{/*<div className="inline"> <Chart data={ratingsWithFilters} /></div>*/}
	    	<div className="chartContainer"> Chart Here </div>
	    </div>
	    <div className="advocates">
	    	<div className="subtitle">Advocates</div>
	    	<div>
	    		<span className="percentageValue"> 47 </span>
	    		<span className="percentage"> % </span>
	    	</div>
	    </div>

	    </div>
	    <div className="section thirdSection clearfix">
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
	    <div className=" section bottomSection clearfix">
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

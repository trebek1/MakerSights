import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData } from '../actions';
import Card from './Card';

export class Cards extends Component {

  renderApiData() {
    const products = [];
    if (this.props.data.length > 0) {
      const { data } = this.props;
      const questions = data[0].questions;

      for (let i = 0; i < questions.length; i++) {
        const card = <Card key={i} data={questions[i]} />
        products.push(card)
      }
    }
    return products;
  }

  componentDidMount(){
    this.props.fetchData();
  }

  render() {
    return (
      <div className="App">
        <div id="cardContainer" className="clearfix">
          {this.renderApiData()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.products,
  };
}

Cards.propTypes = {
  data: PropTypes.array,
};

Cards.defaultProps = {
  fetchData,
  data: [],
};

export default connect(mapStateToProps, { fetchData })(Cards);

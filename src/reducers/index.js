import { combineReducers } from 'redux';
import { GET_DATA } from '../actions';

export const products = (state = [], action) => {
  switch (action.type) {
    case GET_DATA: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({ products });

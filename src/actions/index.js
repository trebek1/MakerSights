export const GET_DATA = 'GET_DATA';

export const setData = data => ({
  payload: data,
  type: GET_DATA,
});

export const fetchData = name => dispatch => fetch(`https://private-anon-9e32fd975b-makersightsinterview.apiary-mock.com/`)
  .then(response => response.json())
  .then((json) => {
    dispatch(setData(json));
  })
  .catch(error => console.error('Error:', error));

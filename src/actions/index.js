import axios from 'axios';

export const fetchData = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3000/data');
    dispatch({ type: 'FETCH_DATA', payload: response.data });
  };
};


// export const fetchData = (id) => {
//   return async (dispatch) => {
//     const response = await axios.get(`http://localhost:3000/data/${id}`);
//     dispatch({ type: 'FETCH_DATA', payload: response.data });
//   };
// };
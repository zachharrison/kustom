import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get('/api/products');

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    // CHECK TO SEE IF THERE IS A CUSTOM ERROR MESSAGE FROM THE SERVER, IF NOT JUST RETURN THE DEFAULT
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    // GET TOTAL NUMBER OF PRODUCTS IN STOCK TO CHECK IF IT IS GREATER THAN ZERO
    const totalStock = Object.values(data.size).reduce(
      (acc, curr) => (acc += curr)
    );

    data.totalStock = totalStock;

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    // CHECK TO SEE IF THERE IS A CUSTOM ERROR MESSAGE FROM THE SERVER, IF NOT JUST RETURN THE DEFAULT
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

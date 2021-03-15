import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (id, size, qty = 1) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.size[size],
      size,
      qty,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id, size) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: { id, size },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

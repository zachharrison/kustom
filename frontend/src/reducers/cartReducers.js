import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      // // ITEM ALREADY EXISTS IN THE CART
      const existingItem = state.cartItems.find(
        (cartItem) =>
          cartItem.product === item.product && cartItem.size === item.size
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.product === existingItem.product &&
            cartItem.size === existingItem.size
              ? item
              : cartItem
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      const itemToDelete = state.cartItems.find(
        (cartItem) =>
          cartItem.size === action.payload.size &&
          cartItem.product === action.payload.id
      );

      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem !== itemToDelete
        ),
      };
    default:
      return state;
  }
};

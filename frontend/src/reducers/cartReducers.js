import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants';

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      // ITEM ALREADY EXISTS IN THE CART
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

    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    default:
      return state;
  }
};

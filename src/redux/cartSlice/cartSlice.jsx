import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart_items: [],
  totalprice: 0,
  quantity: 0,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    add_To_Cart(state, action) {
      let itemIndex = state.cart_items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart_items[itemIndex].quantity += 1;
      } else {
        const cartProduct = { ...action.payload, quantity: 1 };
        state.cart_items.push(cartProduct);
      }
      // localStorage.setItem("cart",JSON.stringify(state.cart));
    },

    single_Product_Add_To_Cart(state, action) {
      const singleProduct = state.cart_items.findIndex(
        (product) => product.id === action.payload.id
      );
      if (singleProduct >= 0) {
        state.cart_items[singleProduct].quantity += action.payload.quantity;
      } else {
        const product = { ...action.payload, quantity: action.payload.quantity };
        state.cart_items.push(product);
      }
    },


    increament(state, action) {
      let cartQuantity = state.cart_items.findIndex(
        (cartIndex) => cartIndex.id === action.payload
      );
      if (state.cart_items[cartQuantity].quantity >= 0) {
        state.cart_items[cartQuantity].quantity += 1;
      }
    },


    decreament(state, action) {
      let cartQuantity = state.cart_items.findIndex(
        (cartIndex) => cartIndex.id === action.payload
      );
      if (state.cart_items[cartQuantity].quantity >= 1) {
        state.cart_items[cartQuantity].quantity -= 1;
      }
      if (state.cart_items[cartQuantity].quantity === 0) {
        state.cart_items[cartQuantity].quantity = 1;
      }
    },

    remove_cart(state, action) {
      let removeCart = state.cart_items.filter(
        (item) => item.id !== action.payload
      );

      state.cart_items = removeCart;
    },
  },
});

export const {
  add_To_Cart,
  increament,
  decreament,
  remove_cart,
  single_Product_Add_To_Cart,
  single_product_increament
} = cartSlice.actions;

export default cartSlice.reducer;

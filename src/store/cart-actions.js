//Thunk - ASYNC
import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

//method: get
export const fetchCartData = function () {
  return async function (dispatch) {
    const fetchData = async function () {
      const response = await fetch(
        "https://e-commerce-7ecc8-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch existing cart items 🥹");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Failed to fetch cart data",
        })
      );
    }
  };
};

//method: put
export const sendCart = function (cart) {
  return async function (dispatch) {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "sending cart data",
      })
    );

    const sendRequest = async function () {
      const response = await fetch(
        "https://e-commerce-7ecc8-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Cart Saved Successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Cart data sending failed",
        })
      );
    }
  };
};

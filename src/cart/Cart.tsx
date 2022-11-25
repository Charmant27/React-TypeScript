import React from "react";
import { Wrapper } from "./Cart.styles";
import CartItems from "../CartItems/CartItems";
import { cartItemsType } from "../App";

type props = {
  cartItems: cartItemsType[];
  addItems: (addedItem: cartItemsType) => void;
  removeItems: (id: number) => void;
};

const Cart: React.FC<props> = ({ cartItems, addItems, removeItems }) => {
  return (
    <Wrapper>
      <h3>your store</h3>
      {cartItems.length === 0 ? "Oops!!! Your Store is Empty..." : ""}
      {cartItems.map((item) => {
        return (
          <CartItems
            key={item.id}
            item={item}
            addItems={addItems}
            removeItems={removeItems}
          />
        );
      })}
    </Wrapper>
  );
};

export default Cart;

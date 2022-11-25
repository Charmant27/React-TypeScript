import React from "react";
import { cartItemsType } from "../App";

//imported styles
import { Wrapper } from "./CartItems.styles";

type props = {
  item: cartItemsType;
  addItems: (addedItem: cartItemsType) => void;
  removeItems: (id: number) => void;
};

const CartItems: React.FC<props> = ({ item, addItems, removeItems }) => {
  return (
    <Wrapper>
      <div>
        <h2>{item.title}</h2>
        <div>
          <p>price: ${item.price}</p>
          <p>total amount: ${item.amount * item.price}</p>
        </div>
        {/* buttons */}
        <div>
          <button onClick={() => addItems(item)}>+</button>
          <p>count: {item.amount}</p>
          <button onClick={() => removeItems(item.id)}>-</button>
        </div>
      </div>
      {/* the item image */}
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
};

export default CartItems;

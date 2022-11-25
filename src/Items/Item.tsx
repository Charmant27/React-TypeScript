import React from "react";

//types
import { cartItemsType } from "../App";

//styled components
import { Wrapper } from "./Items.styles";

type Props = {
  item: cartItemsType;
  addItems: (addedItem: cartItemsType) => void;
};

const Item: React.FC<Props> = ({ item, addItems }) => {
  return (
    <Wrapper className="drop-shadow-xl">
      <img src={item.image} alt={item.title} className="max-h-[350px] w-full" />
      <div>
        <h3 className="font-extrabold text-slate-800 uppercase">
          {item.title}
        </h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <button
        className="transition-all duration-700 py-2 text-white capitalize font-semibold"
        onClick={() => addItems(item)}
      >
        add item
      </button>
    </Wrapper>
  );
};

export default Item;

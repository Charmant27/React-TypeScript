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
    <Wrapper>
      <div className="item-container bg-white mx-9 my-9 drop-shadow-lg">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-[250px] max-w-[300px]"
        />
        <div>
          <h2 className="font-extrabold py-8 uppercase text-slate-900/90">
            {item.title}
          </h2>
          <p className="text-sm text-slate-500">{item.description}</p>
          <p className="price font-bold pt-6">${item.price}</p>
          {/* button adding items to the cart */}
          <div className='pt-8'>
            <button className="px-6 py-2 text-white capitalize transition-all duration-700" onClick={() => addItems(item)}>
              add item
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Item;

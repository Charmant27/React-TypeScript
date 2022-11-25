import React, { useState } from "react";
import { useQuery } from "react-query";
import { FaShoppingCart } from "react-icons/fa";

//components
import Item from "./Items/Item";
import Navbar from "./components/Navbar";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import { Drawer } from "@mui/material";
import Cart from "./cart/Cart";

//styled components
import { Wrapper } from "./App.styles";

//items types
export type cartItemsType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<cartItemsType[]> => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([] as cartItemsType[]);
  const { data } = useQuery<cartItemsType[]>("products", getProducts);

  //functions handling the app's behavior

  //get total items in the cart
  const getTotalItems = (items: cartItemsType[]) => {
    return items.reduce((ack: number, item) => ack + item.amount, 0);
  };

  //adding items to the cart
  const addItems = (addedItem: cartItemsType) => {
    //checking if the item is already in our cart
    setCartItems((items) => {
      // 1. Is the item already added in the cart?
      const isItemInCart = items.find((item) => item.id === addedItem.id);

      if (isItemInCart) {
        return items.map((item) =>
          item.id === addedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...items, { ...addedItem, amount: 1 }];
    });
  };

  //removing items from the cart
  const removeItems = (id: number) => {
   setCartItems((items) =>
     items.reduce((ack, item) => {
       if (item.id === id) {
         if (item.amount === 1) return ack;
         return [...ack, { ...item, amount: item.amount - 1 }];
       } else {
         return [...ack, item];
       }
     }, [] as cartItemsType[])
   );
  };

  return (
    <Wrapper>
      <Drawer anchor="right" open={openCart} onClose={() => setOpenCart(false)}>
        <Cart
          cartItems={cartItems}
          addItems={addItems}
          removeItems={removeItems}
        />
      </Drawer>
      <button
        className="cart-icon fixed z-[100] right-5 top-5 text-2xl"
        onClick={() => setOpenCart(true)}
      >
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <FaShoppingCart />
        </Badge>
      </button>
      <Grid container spacing={3}>
        {data?.map((item) => {
          return (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} addItems={addItems} />
            </Grid>
          );
        })}
      </Grid>
    </Wrapper>
  );
}

export default App;

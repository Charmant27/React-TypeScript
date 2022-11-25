import React, { useState } from "react";
import { useQuery } from "react-query";
import { FaShoppingCart } from "react-icons/fa";

//components
import Item from "./Items/Item";
import Navbar from "./components/Navbar";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import { Drawer } from "@mui/material";

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

  console.log(data);

  //functions handling the app's behavior

  //get total items in the cart
  const getTotalItems = (items: cartItemsType[]) => null;

  //adding items to the cart
  const addItems = (addedItem: cartItemsType) => null;

  //removing items from the cart
  const removeItems = () => null;

  return (
    <Wrapper>
      <Drawer anchor="right" open={openCart} onClose={() => setOpenCart(false)}>
        here are the cart items
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

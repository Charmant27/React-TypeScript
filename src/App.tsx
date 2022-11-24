import React, { useState } from "react";
import { useQuery } from "react-query";

//components
import Item from "./Items/Item";
import Navbar from "./components/Navbar";
import Grid2 from '@mui/material/Unstable_Grid2'
import Grid from '@mui/material/Grid';

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
  const { data, isLoading } = useQuery<cartItemsType[]>(
    "products",
    getProducts
  );

  console.log(data);

  //functions handling the app's behavior

  //get total items in the cart
  const getTotalItems = () => null;

  //adding items to the cart
  const addItems = (addedItem: cartItemsType) => null;

  //removing items from the cart
  const removeItems = () => null;

  return (
    
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item) => {
          return <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} addItems={addItems} />
          </Grid>
        })}
      </Grid>
    </Wrapper>
  );
}

export default App;

import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "$5",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81FsMKqfbzL._AC_UL1500_.jpg",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple macbook",
    price: "$10",
    image: "https://cdn.mos.cms.futurecdn.net/GfinEMFXnT42BFxAcDc2rA.jpg",
  },
];
const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

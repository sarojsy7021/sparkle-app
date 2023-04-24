import React from "react"
import {
  Grid,
  Box,
} from "@mui/material"

import ProductCard from "../../components/ProductCard"

export default function PopularCategory({ searchItem }) {
  return (
    <Box>
      <Grid container>
        <Grid item container xs={12} lg={12} spacing={2}
          style={{
            marginTop: "2rem"
          }}>

          {searchItem.map((item, index) => {
            return <>
              <Grid item lg={4} xs={6} md={4} key={index}>

                <ProductCard
                  image={item.image}
                  title={item.title}
                  cateory={item.category.join(", ")}
                />
              </Grid>
            </>
          })}
        </Grid>
      </Grid>
    </Box>
  )
}
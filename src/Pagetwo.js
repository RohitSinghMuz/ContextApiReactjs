import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { contextdata } from "./Pageone";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
const Pagetwo = () => {
  const getdata = useContext(contextdata);
  return (
    <>
      <Box sx={{ marginTop: "30px" }}>
        <Container>
          <Grid container gap="20px">
            {getdata.map((item, index) => {
              return (
                <grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Card sx={{ width: 260, height: "260", textAlign: "center" }}>
                    <img
                      src={item.image}
                      width="250px"
                      height="260px"
                      alt="ecommerceimage"
                    />
                    <Typography>{item.title}</Typography>
                    <Typography>{item.price}</Typography>
                    <Button variant="outlined" sx={{ margin: "16px" }}>
                      Buy now{" "}
                    </Button>
                  </Card>
                </grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Pagetwo;

import { Button, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles.js";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import ScheduleIcon from "@material-ui/icons/Schedule";
const Meals = () => {
  const classes = useStyles();
  const userCalculatorInfo = {
    caloGainLoss: "2063",
    numBMI: "23.5",
    numTDEE: "1875",
    statusBMI: "Normal",
    target: "2",
  };
  const caloMeal =
    userCalculatorInfo.target === "1"
      ? Math.trunc(userCalculatorInfo.numTDEE / 3)
      : Math.trunc(userCalculatorInfo.caloGainLoss / 3);

  const recipe = {
    name: "qh",
    image: "https://picsum.photos/200",
    type: "protein",
    instruction:
      "high quality product high quality product high quality product high quality product high quality product high quality product",
    ingredients: "hehe",
    url: "https://www.youtube.com/embed/P1mInEK7BEU",
    fruit: "6124f74dab9a228c14faf65b",
    vegetable: "6124f74dab9a228c14faf65b",
    dairy: "6124f74dab9a228c14faf65b",
    grain: "6124f74dab9a228c14faf65b",
    protein: "6124f74dab9a228c14faf65b",
  };
  return (
    <div>
      <Paper elevation={5} style={{ margin: "25px", padding: "25px" }}>
        <Grid container>
          <Grid
            item
            container
            sm="12"
            md="8"
            justifyContent="flex-end"
            className={classes.title}
          >
            <Typography variant="h3" className={classes.titleHeading}>
              RECOMMENDATION MEAL
            </Typography>
          </Grid>
          <Grid
            item
            sm="12"
            md="4"
            container
            justifyContent="flex-end"
            className={classes.title}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "#f73471",
                color: "white",
              }}
            >
              refresh
            </Button>
          </Grid>
        </Grid>
        {/* END TITLE */}
        {/* HEALTH INFO */}
        <Paper elevation={5} style={{ margin: "10px", padding: "10px" }}>
          <Grid container justifyContent="center">
            <Typography variant="h5">
              Your body is{" "}
              <span style={{ color: "#f73471" }}>
                {userCalculatorInfo.statusBMI}{" "}
              </span>
              {userCalculatorInfo.target !== "1" && (
                <span>
                  and your target is
                  <span style={{ color: "#f73471" }}>
                    {" "}
                    {userCalculatorInfo.target === "2"
                      ? "GAIN WEIGHT "
                      : "LOSE WEIGHT "}
                  </span>
                </span>
              )}
              so you need to consume approximately{" "}
              <span style={{ color: "#f73471" }}> {caloMeal}</span> calories in
              each meal.
            </Typography>
          </Grid>
        </Paper>
        {/* END HEALTH INFO */}
        <Grid container>
          {/* Recipes */}
          <Grid item sm="12" md="5">
            <Paper style={{ margin: "10px" }}>
              <img
                style={{ width: "100%", height: "500px" }}
                src={recipe.image}
                alt=""
              />
              <Grid container style={{ margin: "20px" }} alignItems="center">
                <RestaurantIcon
                  className={classes.colorPink}
                  style={{ fontSize: 40 }}
                ></RestaurantIcon>
                <Typography variant="h5" style={{ marginLeft: "20px" }}>
                  {recipe.name}
                </Typography>
              </Grid>
              <Grid container style={{ margin: "20px" }} alignItems="center">
                <ScheduleIcon
                  className={classes.colorPink}
                  style={{ fontSize: 40 }}
                ></ScheduleIcon>
                <Typography variant="h5" style={{ marginLeft: "20px" }}>
                  {recipe.type}
                </Typography>
              </Grid>
            </Paper>
          </Grid>
          {/* end Recipes */}
          {/* Details */}
          <Grid item sm="12" md="7"></Grid>
          {/* end Details */}
        </Grid>
      </Paper>
    </div>
  );
};

export default Meals;

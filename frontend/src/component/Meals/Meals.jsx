import {
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
  Box,
  Link,
  CircularProgress,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles.js";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { useDispatch, useSelector } from "react-redux";
import { Link as goBackBMI } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { getOneUserBMI } from "../../actions/calculatorActions.js";
import { useEffect } from "react";
const Meals = () => {
  const classes = useStyles();
  const userBMIList = useSelector((state) => state.getUserBMI);
  const { loading: loadingBMI, error: errorBMI, userBMI } = userBMIList;
  const dispatch = useDispatch();
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

  const ingredients = {
    name: "Avocado",
    img: "https://picsum.photos/200",
    amount: "48",
    calo: "56",
  };

  useEffect(() => {
    dispatch(getOneUserBMI());
  }, [dispatch]);
  if (userBMI === "") {
    return (
      <Box mt={3} m={3}>
        <Alert severity="error">
          Please calculate your BMI before visiting the ingredients page!{" "}
          <Link component={goBackBMI} to="/calculator">
            Go back to calculator
          </Link>
        </Alert>
      </Box>
    );
  } else {
    return (
      <div>
        {loadingBMI ? (
          <CircularProgress color="secondary" />
        ) : errorBMI ? (
          <Alert severity="error">{errorBMI}</Alert>
        ) : (
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
                  <span style={{ color: "#f73471" }}> {caloMeal}</span> calories
                  in each meal.
                </Typography>
              </Grid>
            </Paper>
            {/* END HEALTH INFO */}
            <Grid container>
              {/* Recipes */}
              <Grid item sm="12" md="5">
                <Paper
                  elevation={5}
                  style={{
                    margin: "10px",
                    padding: "0 0 20px 0",
                    height: "600px",
                  }}
                >
                  <img
                    style={{ width: "100%", height: "400px" }}
                    src={recipe.image}
                    alt=""
                  />
                  <Grid
                    container
                    style={{ margin: "20px" }}
                    alignItems="center"
                  >
                    <RestaurantIcon
                      className={classes.colorPink}
                      style={{ fontSize: 40 }}
                    ></RestaurantIcon>
                    <Typography variant="h5" style={{ marginLeft: "20px" }}>
                      {recipe.name}
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    style={{ margin: "20px" }}
                    alignItems="center"
                  >
                    <ScheduleIcon
                      className={classes.colorPink}
                      style={{ fontSize: 40 }}
                    ></ScheduleIcon>
                    <Typography variant="h5" style={{ marginLeft: "20px" }}>
                      {recipe.type}
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    justifyContent="flex-end"
                    className={classes.title}
                    style={{ paddingRight: "10px" }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#f73471",
                        color: "white",
                      }}
                    >
                      Detail
                    </Button>
                  </Grid>
                </Paper>
              </Grid>
              {/* end Recipes */}
              {/* Details */}
              <Grid item sm="12" md="7">
                <Paper
                  style={{ margin: "10px", padding: "10px", height: "600px" }}
                >
                  {/*  ONE INGREDIENTS */}
                  <Grid
                    container
                    alignItems="center"
                    xs="12"
                    justifyContent="center"
                    style={{ padding: "0 20px 0 20px" }}
                  >
                    <Grid item sm="3" xs="3" container>
                      {ingredients.name}
                    </Grid>
                    <Grid item sm="3" xs="3" container justifyContent="center">
                      <img
                        src={ingredients.img}
                        alt="ingredients"
                        height={100}
                      ></img>
                    </Grid>
                    <Grid item sm="3" xs="3" container justifyContent="center">
                      {ingredients.amount}
                    </Grid>
                    <Grid
                      item
                      sm="3"
                      xs="3"
                      container
                      justifyContent="flex-end"
                    >
                      {ingredients.calo} calo
                    </Grid>
                  </Grid>
                  <Divider
                    style={{ marginTop: "5px", marginBottom: "5px" }}
                  ></Divider>
                  {/* END ONE INGREDIENTS */}
                  {/* Result */}
                  <Grid
                    container
                    style={{ padding: "0 20px 0 20px" }}
                    alignItems="center"
                  >
                    <Grid item xs="6">
                      Total:
                    </Grid>
                    <Grid container item xs="6" justifyContent="flex-end">
                      560 calo
                    </Grid>
                  </Grid>
                  {/* ENd Result */}
                </Paper>
              </Grid>
              {/* end Details */}
            </Grid>
          </Paper>
        )}
      </div>
    );
  }
};

export default Meals;

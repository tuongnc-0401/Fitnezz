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
import { listIngredients } from "../../actions/ingredientActions.js";
import { getOneMeal } from "../../actions/mealAction.js";
const Meals = () => {
  const classes = useStyles();
  const userBMIList = useSelector((state) => state.getUserBMI);
  const { loading: loadingBMI, error: errorBMI, userBMI } = userBMIList;
  const ingredientList = useSelector((state) => state.ingredientList);
  const { loading, error, ingredients } = ingredientList;

  const mealOne = useSelector((state) => state.mealOne);
  const { loading: loadingMeal, error: errorMeal, meal } = mealOne;

  const dispatch = useDispatch();

  const caloMeal =
    userBMI?.target === "1"
      ? Math.trunc(userBMI?.numTDEE / 3)
      : Math.trunc(userBMI?.caloGainLoss / 3) || 0;

  const handleOnRefresh = () => {
    dispatch(getOneMeal(meal?._id));
    console.log("click");
  };

  useEffect(() => {
    dispatch(listIngredients());
    dispatch(getOneUserBMI());
    dispatch(getOneMeal());
  }, [dispatch]);

  if (ingredients.length > 0) {
    var fruit = ingredients.find(
      (item) => item._id.toString() === meal?.fruit.toString()
    );
    var dairy = ingredients.find(
      (item) => item._id.toString() === meal?.dairy.toString()
    );
    var vegetable = ingredients.find(
      (item) => item._id.toString() === meal?.vegetable.toString()
    );
    var grain = ingredients.find(
      (item) => item._id.toString() === meal?.grain.toString()
    );
    var protein = ingredients.find(
      (item) => item._id.toString() === meal?.protein.toString()
    );
  }

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
        {loadingBMI || loading || loadingMeal ? (
          <CircularProgress color="secondary" />
        ) : errorBMI || error || errorMeal ? (
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
                  onClick={handleOnRefresh}
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
            {loadingBMI ? (
              <CircularProgress color="secondary" />
            ) : errorBMI ? (
              <Alert severity="error">{errorBMI}</Alert>
            ) : (
              <Paper elevation={5} style={{ margin: "10px", padding: "10px" }}>
                <Grid container justifyContent="center">
                  <Typography variant="h5">
                    Your body is{" "}
                    <span style={{ color: "#f73471" }}>
                      {userBMI.statusBMI}{" "}
                    </span>
                    {userBMI.target !== "1" && (
                      <span>
                        and your target is
                        <span style={{ color: "#f73471" }}>
                          {" "}
                          {userBMI.target === "2"
                            ? "GAIN WEIGHT "
                            : "LOSE WEIGHT "}
                        </span>
                      </span>
                    )}
                    so you need to consume approximately{" "}
                    <span style={{ color: "#f73471" }}> {caloMeal}</span>{" "}
                    calories in each meal.
                  </Typography>
                </Grid>
              </Paper>
            )}

            {/* END HEALTH INFO */}

            <Grid container>
              {/* Recipes */}

              {loadingMeal ? (
                <CircularProgress color="secondary" />
              ) : errorMeal ? (
                <Alert severity="error">{errorMeal}</Alert>
              ) : (
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
                      src={meal?.image}
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
                        {meal.name}
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
                        {meal.type}
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
                        component={goBackBMI}
                        to={`/recipe/${meal._id}`}
                      >
                        Detail
                      </Button>
                    </Grid>
                  </Paper>
                </Grid>
              )}
              {/* end Recipes */}

              {/* Details */}
              <Grid item sm="12" md="7">
                <Paper
                  style={{ margin: "10px", padding: "10px", height: "600px" }}
                >
                  {loading ? (
                    <CircularProgress color="secondary" />
                  ) : error ? (
                    <Alert severity="error">{error}</Alert>
                  ) : (
                    <div>
                      {/*  ONE INGREDIENTS */}
                      <Grid
                        container
                        alignItems="center"
                        xs="12"
                        justifyContent="center"
                        style={{ padding: "0 20px 0 20px" }}
                      >
                        <Grid item sm="3" xs="3" container>
                          {fruit?.name}
                        </Grid>
                        <Grid
                          item
                          sm="3"
                          xs="3"
                          container
                          justifyContent="center"
                        >
                          <img
                            src={fruit?.image}
                            alt="ingredients"
                            height={100}
                          ></img>
                        </Grid>
                        <Grid
                          item
                          sm="3"
                          xs="3"
                          container
                          justifyContent="center"
                        >
                          {Math.trunc((caloMeal * 0.1) / fruit?.calo)} gam
                        </Grid>
                        <Grid
                          item
                          sm="3"
                          xs="3"
                          container
                          justifyContent="flex-end"
                        >
                          {(caloMeal * 10) / 100} calo
                        </Grid>
                      </Grid>
                      <Divider
                        style={{ marginTop: "5px", marginBottom: "5px" }}
                      ></Divider>
                      {/* END ONE INGREDIENTS */}
                      {/*  ONE INGREDIENTS */}
                      <Grid
                        container
                        alignItems="center"
                        xs="12"
                        justifyContent="center"
                        style={{ padding: "0 20px 0 20px" }}
                      >
                        <Grid item sm="3" xs="3" container>
                          {dairy?.name}
                        </Grid>
                        <Grid
                          item
                          sm="3"
                          xs="3"
                          container
                          justifyContent="center"
                        >
                          <img
                            src={dairy?.image}
                            alt="ingredients"
                            height={100}
                          ></img>
                        </Grid>
                        <Grid
                          item
                          sm="3"
                          xs="3"
                          container
                          justifyContent="center"
                        >
                          {Math.trunc((caloMeal * 0.15) / dairy?.calo)} gam
                        </Grid>
                        <Grid
                          item
                          sm="3"
                          xs="3"
                          container
                          justifyContent="flex-end"
                        >
                          {(caloMeal * 15) / 100} calo
                        </Grid>
                      </Grid>
                      <Divider
                        style={{ marginTop: "5px", marginBottom: "5px" }}
                      ></Divider>
                      {/* END ONE INGREDIENTS */}
                      {/*  ONE INGREDIENTS */}
                      <Grid
                        container
                        alignItems="center"
                        xs="12"
                        justifyContent="center"
                        style={{ padding: "0 20px 0 20px" }}
                      >
                        <Grid item sm="3" xs="3" container>
                          {vegetable?.name}
                        </Grid>
                        <Grid
                          item
                          sm="3"
                          xs="3"
                          container
                          justifyContent="center"
                        >
                          <img
                            src={vegetable?.image}
                            alt="ingredients"
                            height={100}
                          ></img>
                        </Grid>
                        <Grid
                          item
                          sm="3"
                          xs="3"
                          container
                          justifyContent="center"
                        >
                          {Math.trunc((caloMeal * 0.15) / vegetable?.calo)} gam
                        </Grid>
                        <Grid
                          item
                          sm="3"
                          xs="3"
                          container
                          justifyContent="flex-end"
                        >
                          {(caloMeal * 15) / 100} calo
                        </Grid>
                      </Grid>
                      <Divider
                        style={{ marginTop: "5px", marginBottom: "5px" }}
                      ></Divider>
                      {/* END ONE INGREDIENTS */}
                      {/*  ONE INGREDIENTS */}
                      <Grid
                        container
                        alignItems="center"
                        xs="12"
                        justifyContent="center"
                        style={{ padding: "0 20px 0 20px" }}
                      >
                        <Grid item sm="3" xs="3" container>
                          {grain?.name}
                        </Grid>
                        <Grid
                          item
                          sm="3"
                          xs="3"
                          container
                          justifyContent="center"
                        >
                          <img
                            src={grain?.image}
                            alt="ingredients"
                            height={100}
                          ></img>
                        </Grid>
                        <Grid
                          item
                          sm="3"
                          xs="3"
                          container
                          justifyContent="center"
                        >
                          {Math.trunc((caloMeal * 0.1) / grain?.calo)} gam
                        </Grid>
                        <Grid
                          item
                          sm="3"
                          xs="3"
                          container
                          justifyContent="flex-end"
                        >
                          {(caloMeal * 10) / 100} calo
                        </Grid>
                      </Grid>
                      <Divider
                        style={{ marginTop: "5px", marginBottom: "5px" }}
                      ></Divider>
                      {/* END ONE INGREDIENTS */}
                      {/*  ONE INGREDIENTS */}
                      <Grid
                        container
                        alignItems="center"
                        xs="12"
                        justifyContent="center"
                        style={{ padding: "0 20px 0 20px" }}
                      >
                        <Grid item sm="3" xs="3" container>
                          {protein?.name}
                        </Grid>
                        <Grid
                          item
                          sm="3"
                          xs="3"
                          container
                          justifyContent="center"
                        >
                          <img
                            src={protein?.image}
                            alt="ingredients"
                            height={100}
                          ></img>
                        </Grid>
                        <Grid
                          item
                          sm="3"
                          xs="3"
                          container
                          justifyContent="center"
                        >
                          {Math.trunc((caloMeal * 0.5) / protein?.calo)} gam
                        </Grid>
                        <Grid
                          item
                          sm="3"
                          xs="3"
                          container
                          justifyContent="flex-end"
                        >
                          {(caloMeal * 50) / 100} calo
                        </Grid>
                      </Grid>
                      <Divider
                        style={{ marginTop: "5px", marginBottom: "5px" }}
                      ></Divider>
                      {/* END ONE INGREDIENTS */}
                    </div>
                  )}

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
                      {caloMeal} calo
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

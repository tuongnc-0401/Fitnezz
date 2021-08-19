import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  OutlinedInput,
  Paper,
  Select,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import useStyles from "./styles.js";
import { useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";

const Calculator = () => {
  const { userInfo } = useSelector((state) => state.userSignIn);
  const gender = userInfo?.gender ? "Male" : "Female";
  const classes = useStyles();
  const initialState = {
    age: "",
    height: "",
    weight: "",
    activity: "1.2",
    target: "1",
    weightTarget: "",
    speed: "1",
  };
  const [dataForm, setDataForm] = useState(initialState);
  const handleOnChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  // Validation
  const [errorForm, setErrorForm] = useState({});
  const handleValidation = () => {
    var error = {};
    var validate = true;

    if (!dataForm.age) {
      error["age"] = "Age is required!";
      validate = false;
    } else {
      if (!dataForm.age.match(/^[0-9]*$/)) {
        error["age"] = "Age must be number!";
        validate = false;
      }
    }

    if (!dataForm.height) {
      error["height"] = "Height is required!";
      validate = false;
    } else {
      if (!dataForm.height.match(/^[0-9]*$/)) {
        error["height"] = "Height must be number!";
        validate = false;
      }
    }

    if (!dataForm.weight) {
      error["weight"] = "Weight is required!";
      validate = false;
    } else {
      if (!dataForm.weight.match(/^[0-9]*$/)) {
        error["weight"] = "Weight must be number!";
        validate = false;
      }
    }

    if (dataForm.target !== "1") {
      if (!dataForm.weightTarget) {
        error["weightTarget"] = "Weight Target is required!";
        validate = false;
      } else {
        if (!dataForm.weightTarget.match(/^[0-9]*$/)) {
          error["weightTarget"] = "Weight Target must be number!";
          validate = false;
        } else {
          if (dataForm.target === "0") {
            if (+dataForm.weightTarget >= +dataForm.weight) {
              error["weightTarget"] =
                "Weight Target must be less than your current weight!";
              validate = false;
            }
          }

          if (dataForm.target === "2") {
            if (+dataForm.weightTarget <= +dataForm.weight) {
              error["weightTarget"] =
                "Weight Target must be greater than your current weight!";
              validate = false;
            }
          }
        }
      }
    }

    setErrorForm(error);
    return validate;
  };
  // End validation

  // Calculate TDEE
  const [TDEE, setTDEE] = useState("");
  const calculateTDEE = () => {
    const K = userInfo?.gender ? 5 : -161;
    const BMR =
      9.99 * +dataForm.weight +
      6.25 * +dataForm.height -
      4.92 * +dataForm.age +
      K;
    const TDEE = BMR * +dataForm.activity;
    return TDEE;
  };
  // End Calculate TDEE

  // Calculate BMI
  const [BMI, setBMI] = useState("");
  const [statusBMI, setStatusBMI] = useState("");
  const calculateBMI = () => {
    const result =
      (dataForm.weight / (dataForm.height * dataForm.height)) * 10000;
    return result.toFixed(1);
  };
  const calculateStatus = (num) => {
    if (+num < 18.5) {
      return "Underweight";
    }
    if (+num >= 18.5 && num <= 24.9) {
      return "Normal";
    }
    if (+num > 24.9 && num <= 29.9) {
      return "Overweight";
    }
    if (+num > 29.9 && num <= 34.9) {
      return "Obesity class I";
    }
    if (+num > 34.9 && num <= 39.9) {
      return "Obesity class II";
    }
    if (+num > 39.9) {
      return "Obesity class III";
    }
  };
  // End Calculate BMI

  // Submit and Reset
  const handleOnSubmit = () => {
    if (handleValidation()) {
      const resultTDEE = Math.ceil(calculateTDEE());
      setTDEE(resultTDEE);

      const resultBMI = calculateBMI();
      setBMI(resultBMI);
      const resultStatus = calculateStatus(resultBMI);
      setStatusBMI(resultStatus);
    }
  };
  const resetForm = () => {
    setDataForm(initialState);
    setErrorForm({});
  };
  // End Submit and Reset

  return (
    <div>
      <Box mr={6} ml={6} mt={3}>
        {/* TITLE OF PAGE */}
        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="h3" style={{ color: "#f73471" }}>
              TDEE Calculator
            </Typography>
          </Grid>
        </Grid>
        {/* END TITLE OF PAGE */}
      </Box>
      <Box mr={6} ml={6}>
        <Grid container spacing={3}>
          {/* LEFT SIDE */}
          <Grid item sm="12" md="6">
            <Box mt={3}>
              <Paper elevation={3} style={{ padding: "30px" }}>
                {/* One Input */}
                <Box mb={3}>
                  <Grid container spacing={3} alignItems="center">
                    <Grid
                      className={classes.title}
                      item
                      sm="12"
                      md="3"
                      container
                      justifyContent="flex-end"
                    >
                      <Grid item>
                        <Typography variant="h5">Gender:</Typography>
                      </Grid>
                    </Grid>
                    <Grid item sm="12" md="9">
                      <Typography variant="h5">{gender}</Typography>
                    </Grid>
                  </Grid>
                </Box>
                {/* END ONE INPUT */}

                {/* One Input */}
                <Box mb={3}>
                  <Grid container spacing={3} alignItems="center">
                    <Grid
                      className={classes.title}
                      item
                      sm="12"
                      md="3"
                      container
                      justifyContent="flex-end"
                    >
                      <Grid item>
                        <Typography variant="h5">Age:</Typography>
                      </Grid>
                    </Grid>
                    <Grid item sm="12" md="9">
                      <OutlinedInput
                        name="age"
                        value={dataForm.age}
                        onChange={handleOnChange}
                        endAdornment={
                          <InputAdornment position="end">
                            years old
                          </InputAdornment>
                        }
                        fullWidth
                      />
                      {errorForm?.age && (
                        <Alert severity="warning">{errorForm.age}</Alert>
                      )}
                    </Grid>
                  </Grid>
                </Box>
                {/* END ONE INPUT */}
                {/* One Input */}
                <Box mb={3}>
                  <Grid container spacing={3} alignItems="center">
                    <Grid
                      className={classes.title}
                      item
                      sm="12"
                      md="3"
                      container
                      justifyContent="flex-end"
                    >
                      <Grid item>
                        <Typography variant="h5">Height:</Typography>
                      </Grid>
                    </Grid>
                    <Grid item sm="12" md="9">
                      <OutlinedInput
                        name="height"
                        value={dataForm.height}
                        onChange={handleOnChange}
                        endAdornment={
                          <InputAdornment position="end">cm</InputAdornment>
                        }
                        fullWidth
                      />
                      {errorForm?.height && (
                        <Alert severity="warning">{errorForm.height}</Alert>
                      )}
                    </Grid>
                  </Grid>
                </Box>
                {/* END ONE INPUT */}
                {/* One Input */}
                <Box mb={3}>
                  <Grid container spacing={3} alignItems="center">
                    <Grid
                      className={classes.title}
                      item
                      sm="12"
                      md="3"
                      container
                      justifyContent="flex-end"
                    >
                      <Grid item>
                        <Typography variant="h5">Weight:</Typography>
                      </Grid>
                    </Grid>
                    <Grid item sm="12" md="9">
                      <OutlinedInput
                        name="weight"
                        value={dataForm.weight}
                        onChange={handleOnChange}
                        endAdornment={
                          <InputAdornment position="end">kg</InputAdornment>
                        }
                        fullWidth
                      />
                      {errorForm?.weight && (
                        <Alert severity="warning">{errorForm.weight}</Alert>
                      )}
                    </Grid>
                  </Grid>
                </Box>
                {/* END ONE INPUT */}

                {/* One Input */}
                <Box mb={3}>
                  <Grid container spacing={3} alignItems="center">
                    <Grid
                      className={classes.title}
                      item
                      sm="12"
                      md="3"
                      container
                      justifyContent="flex-end"
                    >
                      <Grid item>
                        <Typography variant="h5">Activity:</Typography>
                      </Grid>
                    </Grid>
                    <Grid item sm="12" md="9">
                      <FormControl variant="outlined" fullWidth>
                        <Select
                          native
                          name="activity"
                          value={dataForm.activity}
                          onChange={handleOnChange}
                          // value={state.age}
                          // onChange={handleChange}
                        >
                          <option value={1.2}>Sedentary (office job)</option>
                          <option value={1.375}>
                            Light Exercise (1-2 days)
                          </option>
                          <option value={1.55}>
                            Moderate Exercise (3-5 days/week)
                          </option>
                          <option value={1.725}>
                            Heavy Exercise (6-7 days/week)
                          </option>
                          <option value={1.9}>Athlete (2x per day)</option>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Box>
                {/* END ONE INPUT */}

                {/* One Input */}
                <Box mb={3}>
                  <Grid container spacing={3} alignItems="center">
                    <Grid
                      className={classes.title}
                      item
                      sm="12"
                      md="3"
                      container
                      justifyContent="flex-end"
                    >
                      <Grid item>
                        <Typography variant="h5">Your target:</Typography>
                      </Grid>
                    </Grid>
                    <Grid item sm="12" md="9">
                      <FormControl component="fieldset">
                        <RadioGroup
                          name="target"
                          value={dataForm.target}
                          onChange={handleOnChange}
                        >
                          <FormControlLabel
                            value="0"
                            control={<Radio />}
                            label="Lose weight"
                          />
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Maintain weight"
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="Gain weight"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Box>
                {/* END ONE INPUT */}
                {dataForm.target !== "1" && (
                  <div>
                    <Box mb={3}>
                      <Grid container spacing={3} alignItems="center">
                        <Grid
                          className={classes.title}
                          item
                          sm="12"
                          md="3"
                          container
                          justifyContent="flex-end"
                        >
                          <Grid item>
                            <Typography variant="h5">Weight target:</Typography>
                          </Grid>
                        </Grid>
                        <Grid item sm="12" md="9">
                          <OutlinedInput
                            name="weightTarget"
                            value={dataForm.weightTarget}
                            onChange={handleOnChange}
                            endAdornment={
                              <InputAdornment position="end">kg</InputAdornment>
                            }
                            fullWidth
                          />
                          {errorForm?.weightTarget && (
                            <Alert severity="warning">
                              {errorForm.weightTarget}
                            </Alert>
                          )}
                        </Grid>
                      </Grid>
                    </Box>
                    <Box>
                      <Grid container spacing={3} alignItems="center">
                        <Grid
                          className={classes.title}
                          item
                          sm="12"
                          md="3"
                          container
                          justifyContent="flex-end"
                        >
                          <Grid item>
                            <Typography variant="h5">Speed:</Typography>
                          </Grid>
                        </Grid>
                        <Grid item sm="12" md="9">
                          <FormControl component="fieldset">
                            <RadioGroup
                              name="speed"
                              value={dataForm.speed}
                              onChange={handleOnChange}
                              // value={value} onChange={handleChange}
                            >
                              <FormControlLabel
                                value="0"
                                control={<Radio />}
                                label="Low"
                              />
                              <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="Normal"
                              />
                              <FormControlLabel
                                value="2"
                                control={<Radio />}
                                label="Quick"
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Box>
                  </div>
                )}

                {/* BTN GROUP */}
                <Box>
                  <Grid container>
                    <Grid
                      item
                      sm="12"
                      md="7"
                      container
                      justifyContent="flex-end"
                      className={classes.btnGroup}
                    >
                      <Box mt={3}>
                        <Grid item>
                          <Button
                            onClick={handleOnSubmit}
                            size="large"
                            variant="contained"
                            style={{
                              backgroundColor: "#f73471",
                              color: "white",
                              width: "150%",
                            }}
                          >
                            Calculate
                          </Button>
                        </Grid>
                      </Box>
                    </Grid>

                    <Grid
                      item
                      sm="12"
                      md="5"
                      container
                      justifyContent="flex-end"
                    >
                      <Box mt={3}>
                        <Grid item>
                          <Button
                            onClick={resetForm}
                            variant="outlined"
                            style={{
                              color: "#f73471",
                              borderColor: "#f73471",
                              backgroundColor: "white",
                            }}
                          >
                            Reset form
                          </Button>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                {/* END BTN */}
              </Paper>
            </Box>
          </Grid>
          {/* END LEFT SIDE */}

          {/* RIGHT SIDE */}
          <Grid item sm="12" md="6">
            <Box mt={3}>
              <Paper elevation={3} style={{ padding: "30px" }}>
                {/* TDEE RESULT BOX */}
                <Box>
                  {!TDEE ? (
                    <Typography variant="h6">
                      Use the TDEE calculator to learn your Total Daily Energy
                      Expenditure, a measure of how many calories you burn per
                      day. This calorie calculator will also display your BMI,
                      calories you need to loss weight, gain weight, maintain
                      status!
                    </Typography>
                  ) : (
                    <h1>{TDEE}</h1>
                  )}
                </Box>
                {/* END TDEE Box */}
                {/* BMI Result */}
                <Box mt={3}>
                  {!BMI ? (
                    <Typography variant="h6">BMI status</Typography>
                  ) : (
                    <h1>
                      {BMI} {statusBMI}
                    </h1>
                  )}
                </Box>
                {/* End BMI BOX */}
              </Paper>
            </Box>
          </Grid>
          {/* END RIGHT SIDE */}
        </Grid>
      </Box>
    </div>
  );
};

export default Calculator;

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
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles.js";

const Calculator = () => {
  const classes = useStyles();
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
                        <Typography variant="h5">Age:</Typography>
                      </Grid>
                    </Grid>
                    <Grid item sm="12" md="9">
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">
                            years old
                          </InputAdornment>
                        }
                        fullWidth
                      />
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
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">cm</InputAdornment>
                        }
                        fullWidth
                      />
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
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">kg</InputAdornment>
                        }
                        fullWidth
                      />
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
                          // value={value} onChange={handleChange}
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
                        <Typography variant="h5">Weight target:</Typography>
                      </Grid>
                    </Grid>
                    <Grid item sm="12" md="9">
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">kg</InputAdornment>
                        }
                        fullWidth
                      />
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
                        <Typography variant="h5">Speed:</Typography>
                      </Grid>
                    </Grid>
                    <Grid item sm="12" md="9">
                      <FormControl component="fieldset">
                        <RadioGroup
                          name="speed"
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
                {/* END ONE INPUT */}
              </Paper>
            </Box>
          </Grid>
          {/* END LEFT SIDE */}

          {/* RIGHT SIDE */}
          <Grid item sm="12" md="6">
            <Box mt={3}>
              <Paper elevation={3} style={{ padding: "30px" }}>
                <Typography variant="h6">
                  Use the TDEE calculator to learn your Total Daily Energy
                  Expenditure, a measure of how many calories you burn per day.
                  This calorie calculator will also display your BMI, calories
                  you need to loss weight, gain weight, maintain status!
                </Typography>
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

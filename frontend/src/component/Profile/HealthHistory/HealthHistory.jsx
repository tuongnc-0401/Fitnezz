import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  withStyles,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrderMine } from "../../../actions/orderActions";
import ProfileNav from "../ProfileNav";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { useHistory } from "react-router-dom";
import { getAllCalculatorHistory } from "../../../actions/calculatorActions";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#f73471",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const HealthHistory = () => {
  const calculatorMine = useSelector((state) => state.calculatorMine);
  const { loading, error, calculators } = calculatorMine;
  //const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCalculatorHistory());
  }, [dispatch]);

  return (
    <Box mt={5.5}>
      {console.log("Rendering jsx")}
      <Box ml={6} mr={6}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={3}>
            <ProfileNav current={2}></ProfileNav>
          </Grid>
          {loading ? (
            <CircularProgress color="secondary" />
          ) : error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <Grid item xs={12} md={9}>
              <Box marginBottom={3}>
                <Paper elevation={3} style={{ padding: "40px" }}>
                  <Typography
                    variant="h4"
                    style={{
                      marginBottom: "10px",
                      color: "#f73471",
                      fontWeight: "bold",
                    }}
                  >
                    Health History
                  </Typography>
                  {calculators.map((item) => (
                    <Paper
                      elevation={3}
                      style={{ padding: "40px", marginBottom: "10px" }}
                    >
                      <Grid
                        xs="12"
                        container
                        alignItems="center"
                        style={{ marginBottom: "3px" }}
                      >
                        <DateRangeIcon style={{ fontSize: 45 }}></DateRangeIcon>
                        <Typography
                          variant="h6"
                          style={{ color: "#f73471", marginLeft: "10px" }}
                        >
                          {item.createdAt.slice(0, 10)}
                        </Typography>
                      </Grid>
                      <Grid
                        xs="12"
                        container
                        alignItems="center"
                        style={{ marginBottom: "3px" }}
                      >
                        <QueryBuilderIcon
                          style={{ fontSize: 45 }}
                        ></QueryBuilderIcon>
                        <Typography
                          variant="h6"
                          style={{ color: "#f73471", marginLeft: "10px" }}
                        >
                          {item.createdAt.slice(11, 19)}
                        </Typography>
                      </Grid>
                      <Divider
                        style={{ marginBottom: "5px", marginTop: "5px" }}
                      ></Divider>
                      <Grid
                        xs="12"
                        container
                        alignItems="center"
                        style={{ marginBottom: "3px" }}
                      >
                        <Typography variant="h6" style={{ fontWeight: "bold" }}>
                          Height:
                        </Typography>
                        <Typography variant="h6" style={{ marginLeft: "10px" }}>
                          {item.height} cm
                        </Typography>
                      </Grid>
                      <Grid
                        xs="12"
                        container
                        alignItems="center"
                        style={{ marginBottom: "3px" }}
                      >
                        <Typography variant="h6" style={{ fontWeight: "bold" }}>
                          Weight:
                        </Typography>
                        <Typography variant="h6" style={{ marginLeft: "10px" }}>
                          {item.weight} kg
                        </Typography>
                      </Grid>
                      <Grid
                        xs="12"
                        container
                        alignItems="center"
                        style={{ marginBottom: "3px" }}
                      >
                        <Typography variant="h6" style={{ fontWeight: "bold" }}>
                          Target:
                        </Typography>
                        <Typography variant="h6" style={{ marginLeft: "10px" }}>
                          {item.target === "1"
                            ? "Maintain weight"
                            : item.target === "0"
                            ? "Lose weight"
                            : "Gain weight"}
                        </Typography>
                      </Grid>
                    </Paper>
                  ))}
                </Paper>
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default HealthHistory;

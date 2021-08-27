import { Box, CircularProgress, Grid, Link } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProgram } from "./../../actions/programActions";
import Program from "./Program/Program";
import Recommendation from "./Recommendation/Recommendation";
import useStyles from "./styles";
import { Link as goBackBMI } from "react-router-dom";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';


function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function FitnessVideo(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [width, height] = useWindowSize();

  console.log(height);

  const [nextClick, setNextClick] = useState(0);
  const [size, setSize] = useState(0);
  const [disableRight, setDisableRight] = useState(false);
  const [disableLeft, setDisableLeft] = useState(false);

  // const { order, loading, error } = useSelector((state) => state.orderDetails)
  const listAllProgram = useSelector((state) => state.getAllPrograms);
  const { listPrograms, loading, error } = listAllProgram;

  const userBMIList = useSelector((state) => state.getUserBMI);
  const { loading: loadingBMI, error: errorBMI, userBMI } = userBMIList;

  // console.log(listAllProgram);

  // if (listPrograms) {
  //   // const date = )
  //   console.log(new Date(listPrograms[0].releaseDate).getMonth());
  // }

  useEffect(() => {
    dispatch(getAllProgram());
  }, [dispatch]);

  const nextImg = () => {
    setSize(document.getElementById('foo').clientWidth);
    if (nextClick === timesClickable()) {
      return;
    }
    setNextClick(nextClick + 1);
  };

  const preImg = () => {
    setSize(document.getElementById('foo')?.clientWidth);
    setNextClick(forcePositive(nextClick) - 1);
  }

  const forcePositive = (num) => {
    if (num <= 1) {
      setDisableLeft(true);
      return 1;
    }
    setDisableLeft(false);
    return num;
  };

  const timesClickable = () => {
    var defaultTimes = 3;
    if (width <= 600) {
      defaultTimes = 1;
    }
    if (width >= 600 && width <= 1280) {
      defaultTimes = 2;
    }
    const res = listPrograms?.length - defaultTimes;
    return res;
  };

  // eslint-disable-next-line
  useEffect(() => {
    if (nextClick === timesClickable()) {
      setDisableRight(true)
    } else {
      setDisableRight(false);
    }
  });

  // eslint-disable-next-line
  useEffect(() => {
    if (nextClick === 0) {
      setDisableLeft(false);
    } else {
      setDisableLeft(true);
    }
  })

  // console.log('nextClick', nextClick);


  useEffect(() => {
    if (width <= 600) {
      setSize(document.getElementById('foo')?.clientWidth);
    }
    if (width >= 600 && width <= 1280) {
      setSize(document.getElementById('foo')?.clientWidth);
    }
    if (width >= 1280) {
      setSize(document.getElementById('foo')?.clientWidth);
    }
  }, [width]);

  return (
    <div>
      <div className={classes.bigPicture}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              fontSize: "60px",
              color: "white",
              fontWeight: "400",
              marginBottom: "50px",
              textAlign: "center",
            }}
          >
            Free Workout Programs
          </div>
        </div>
      </div>

      <div className={classes.body}>
        <div className={classes.line}></div>

        <div
          style={{ margin: "50px 0px", fontWeight: "550", fontSize: "23px" }}
        >
          Recommendation
          {/* <div style={{ color: 'black' }}>{`${width} ne ${height} ne`}</div> */}
        </div>

        {listAllProgram && (
          <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <NavigateBeforeIcon onClick={preImg} className={disableLeft ? classes.leftIcon : classes.leftIconDisable} />
            </div>
            {userBMI === "" ?
              <Box mt={3} m={3}>
                <Alert severity="error">
                  Please calculate your BMI before visiting the ingredients page!{" "}
                  <Link component={goBackBMI} to="/calculator">
                    Go back to calculator
                  </Link>
                </Alert>
              </Box>
              : <Grid container spacing={4} className={classes.showRec}>
                {listPrograms?.map((program) => (
                  <Recommendation size={size} program={program} nextClick={nextClick} />
                ))}

                {/* linedown */}

                {/* For Del purpose */}

                <div className={classes.video4del}
                ></div>

                <div className={classes.video4del}
                ></div>

                <div className={classes.video4del}
                ></div>
              </Grid>
            }
            <div style={{ width: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <NavigateNextIcon onClick={nextImg} className={disableRight ? classes.rightIconDisable : classes.rightIcon} />
            </div>
          </div>
        )}

        <div className={classes.line}></div>
        <div
          style={{ margin: "50px 0px", fontWeight: "550", fontSize: "23px" }}
        >
          Free Home Workout Programs
        </div>
        {loading && <CircularProgress color="secondary" />}
        {error && <Alert severity="error">{error}</Alert>}
        {listAllProgram && (
          <Grid container spacing={4} className={classes.showVideo}>
            {listPrograms?.map((program) => (
              <Program program={program} />
            ))}

            {/* linedown */}

            {/* For Del purpose */}

            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              className={classes.video4del}
            ></Grid>

            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              className={classes.video4del}
            ></Grid>

            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              className={classes.video4del}
            ></Grid>
          </Grid>
        )}
      </div>
    </div>
  );
}

export default FitnessVideo;

import { CircularProgress, Grid } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProgram } from "./../../actions/programActions";
import Program from "./Program/Program";
import Recommendation from "./Recommendation/Recommendation";
import useStyles from "./styles";

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

function FitnessVideo(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [nextClick, setNextClick] = useState(false);

  // const { order, loading, error } = useSelector((state) => state.orderDetails)
  const listAllProgram = useSelector((state) => state.getAllPrograms);
  const { listPrograms, loading, error } = listAllProgram;

  console.log(listAllProgram);

  if (listPrograms) {
    // const date = )
    console.log(new Date(listPrograms[0].releaseDate).getMonth());
  }

  useEffect(() => {
    dispatch(getAllProgram());
  }, [dispatch]);

  const nextImg = () => {
    setNextClick(true);
  };

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
          Recommandation
        </div>

        {listAllProgram && (
          <div style={{ width: '100%', backgroundColor: 'green', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>
              <NavigateBeforeIcon style={{ padding: '8px 9px', borderRadius: '30px', backgroundColor: 'red', cursor: 'pointer' }} />
            </div>
            <div container spacing={4} className={classes.showRec}>
              {listPrograms?.map((program) => (
                <Recommendation program={program} nextClick={nextClick}/>
              ))}

              {/* linedown */}

              {/* For Del purpose */}

              <div className={classes.video4del}
              ></div>

              <div className={classes.video4del}
              ></div>

              <div className={classes.video4del}
              ></div>
            </div>
            <div style={{ width: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>
              <NavigateNextIcon onClick={nextImg} style={{ padding: '8px 9px', borderRadius: '30px', backgroundColor: 'red', cursor: 'pointer' }} />
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

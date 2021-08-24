import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";

function Recommendation({ program, nextClick, size }) {
    const monthConverter = (month) => {
        switch (month) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            case 11:
                return "December";
            default:
                break;
        }
    };

    const [props, setProps] = useState({
        pixel: `-${size}px`,
    });

    const classes = useStyles(props);

    const [hover, setHover] = useState(false);


    useEffect(() => {
        setProps({ pixel: `${-size * nextClick}px` });
    }, [nextClick, size])

    console.log('size', size);
    // console.log('nextClick', nextClick);

    return (
        <>
            <Grid
            xs={12}
            sm={6}
            lg={4}
                className={nextClick > 0 ? classes.videoHover : classes.video}
                style={{ paddingBottom: "0px" }}
                id='foo'
            >
                <Grid
                    component={Link}
                    to={`videos/${program._id}`}
                    style={{ backgroundImage: `url(${program.imgUrl})` }}
                    className={classes.cart}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <div className={hover ? classes.overlayHover : classes.overlay}>
                        <div style={{ paddingLeft: "15px", paddingBottom: "20px" }}>
                            <div style={{ fontSize: "12px" }}>
                                { }
                                Release date:{" "}
                                {monthConverter(new Date(program.releaseDate).getMonth())}{" "}
                                {new Date(program.releaseDate).getFullYear()}
                            </div>

                            <div style={{ fontSize: "20px" }}>{program.name}</div>
                            <div
                                style={{
                                    display: "flex",
                                    color: "#f73471",
                                    fontWeight: "bold",
                                    marginTop: "10px",
                                }}
                            >
                                <div>
                                    {program.timeMinute} - {program.timeMinute + 5} min
                                </div>
                                <div style={{ marginLeft: "20px" }}>
                                    {program.duration} Days
                                </div>
                            </div>
                            <div style={{ fontSize: "14px", marginTop: "10px" }}>
                                Type: {program.type}
                            </div>
                            <div style={{ fontSize: "14px" }}>
                                Equipment: {program.equipment}
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default Recommendation;
import React, { useState } from 'react';
import useStyles from "./styles";
import { Grid } from "@material-ui/core";

function FitnessVideo(props) {
    const classes = useStyles();
    const [ hover, setHover] = useState(false);

    return (
        <div>
            <div className={classes.bigPicture}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                    <div style={{ fontSize: '60px', color: 'white', fontWeight: '400', marginBottom: '50px', textAlign: 'center'}}>Free Workout Programs</div>
                </div>
            </div>

            <div className={classes.body} >
                <div className={classes.line}>
                </div>

                <div style={{ margin: '50px 0px', fontWeight: '550', fontSize: '23px' }}>
                    Free Home Workout Programs
                </div>
                <Grid container spacing={4} className={classes.showVideo}>
                    <Grid item xs={12} sm={6} lg={4} className={classes.video} style={{ paddingBottom: '0px' }}>
                        <div className={classes.cart} onMouseEnter={() => setHover(true)}  onMouseLeave={() => setHover(false)}>
                            <div className={hover ? classes.overlayHover : classes.overlay}>
                                <div style={{paddingLeft: '15px', paddingBottom: '20px'}}>
                                    <div style={{ fontSize: '12px' }}>
                                        Release date: July 2021
                                    </div>
                                    
                                    <div style={{ fontSize: '20px' }}>
                                        2 Weeks Shred Challenge
                                    </div>
                                    <div style={{ display: 'flex', color: '#f73471', fontWeight: 'bold', marginTop: '10px'}}>
                                        <div>
                                            30-40 min
                                        </div>
                                        <div style={{ marginLeft: '20px'}}>
                                            14 Days
                                        </div>
                                    </div>
                                    <div style={{ fontSize: '14px', marginTop: '10px' }}>
                                        Type: Full Body, Weight Loss
                                    </div>
                                    <div style={{ fontSize: '14px' }}>
                                        Equipment: Dumbbells, Resistance Bands
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={4} className={classes.video} >
                        <div className={classes.cart} onMouseEnter={() => setHover(true)}  onMouseLeave={() => setHover(false)}>
                            <div className={hover ? classes.overlayHover : classes.overlay}>
                                <div style={{paddingLeft: '15px', paddingBottom: '20px'}}>
                                    <div style={{ fontSize: '12px' }}>
                                        Release date: July 2021
                                    </div>
                                    
                                    <div style={{ fontSize: '20px' }}>
                                        2 Weeks Shred Challenge
                                    </div>
                                    <div style={{ display: 'flex', color: '#f73471', fontWeight: 'bold', marginTop: '10px'}}>
                                        <div>
                                            30-40 min
                                        </div>
                                        <div style={{ marginLeft: '20px'}}>
                                            14 Days
                                        </div>
                                    </div>
                                    <div style={{ fontSize: '14px', marginTop: '10px' }}>
                                        Type: Full Body, Weight Loss
                                    </div>
                                    <div style={{ fontSize: '14px' }}>
                                        Equipment: Dumbbells, Resistance Bands
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={4} className={classes.video} >
                        <div className={classes.cart} onMouseEnter={() => setHover(true)}  onMouseLeave={() => setHover(false)}>
                            <div className={hover ? classes.overlayHover : classes.overlay}>
                                <div style={{paddingLeft: '15px', paddingBottom: '20px'}}>
                                    <div style={{ fontSize: '12px' }}>
                                        Release date: July 2021
                                    </div>
                                    
                                    <div style={{ fontSize: '20px' }}>
                                        2 Weeks Shred Challenge
                                    </div>
                                    <div style={{ display: 'flex', color: '#f73471', fontWeight: 'bold', marginTop: '10px'}}>
                                        <div>
                                            30-40 min
                                        </div>
                                        <div style={{ marginLeft: '20px'}}>
                                            14 Days
                                        </div>
                                    </div>
                                    <div style={{ fontSize: '14px', marginTop: '10px' }}>
                                        Type: Full Body, Weight Loss
                                    </div>
                                    <div style={{ fontSize: '14px' }}>
                                        Equipment: Dumbbells, Resistance Bands
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>

                    {/* linedown */}

                    <Grid item xs={12} sm={6} lg={4} className={classes.video} style={{ paddingBottom: '0px' }}>
                        <div className={classes.cart} onMouseEnter={() => setHover(true)}  onMouseLeave={() => setHover(false)}>
                            <div className={hover ? classes.overlayHover : classes.overlay}>
                                <div style={{paddingLeft: '15px', paddingBottom: '20px'}}>
                                    <div style={{ fontSize: '12px' }}>
                                        Release date: July 2021
                                    </div>
                                    
                                    <div style={{ fontSize: '20px' }}>
                                        2 Weeks Shred Challenge
                                    </div>
                                    <div style={{ display: 'flex', color: '#f73471', fontWeight: 'bold', marginTop: '10px'}}>
                                        <div>
                                            30-40 min
                                        </div>
                                        <div style={{ marginLeft: '20px'}}>
                                            14 Days
                                        </div>
                                    </div>
                                    <div style={{ fontSize: '14px', marginTop: '10px' }}>
                                        Type: Full Body, Weight Loss
                                    </div>
                                    <div style={{ fontSize: '14px' }}>
                                        Equipment: Dumbbells, Resistance Bands
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={4} className={classes.video} >
                        <div className={classes.cart} onMouseEnter={() => setHover(true)}  onMouseLeave={() => setHover(false)}>
                            <div className={hover ? classes.overlayHover : classes.overlay}>
                                <div style={{paddingLeft: '15px', paddingBottom: '20px'}}>
                                    <div style={{ fontSize: '12px' }}>
                                        Release date: July 2021
                                    </div>
                                    
                                    <div style={{ fontSize: '20px' }}>
                                        2 Weeks Shred Challenge
                                    </div>
                                    <div style={{ display: 'flex', color: '#f73471', fontWeight: 'bold', marginTop: '10px'}}>
                                        <div>
                                            30-40 min
                                        </div>
                                        <div style={{ marginLeft: '20px'}}>
                                            14 Days
                                        </div>
                                    </div>
                                    <div style={{ fontSize: '14px', marginTop: '10px' }}>
                                        Type: Full Body, Weight Loss
                                    </div>
                                    <div style={{ fontSize: '14px' }}>
                                        Equipment: Dumbbells, Resistance Bands
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={4} className={classes.video} >
                        <div className={classes.cart} onMouseEnter={() => setHover(true)}  onMouseLeave={() => setHover(false)}>
                            <div className={hover ? classes.overlayHover : classes.overlay}>
                                <div style={{paddingLeft: '15px', paddingBottom: '20px'}}>
                                    <div style={{ fontSize: '12px' }}>
                                        Release date: July 2021
                                    </div>
                                    
                                    <div style={{ fontSize: '20px' }}>
                                        2 Weeks Shred Challenge
                                    </div>
                                    <div style={{ display: 'flex', color: '#f73471', fontWeight: 'bold', marginTop: '10px'}}>
                                        <div>
                                            30-40 min
                                        </div>
                                        <div style={{ marginLeft: '20px'}}>
                                            14 Days
                                        </div>
                                    </div>
                                    <div style={{ fontSize: '14px', marginTop: '10px' }}>
                                        Type: Full Body, Weight Loss
                                    </div>
                                    <div style={{ fontSize: '14px' }}>
                                        Equipment: Dumbbells, Resistance Bands
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    
                    {/* For Del purpose */}

                    <Grid item xs={12} sm={6} lg={4} className={classes.video4del} onMouseEnter={() => setHover(true)}  onMouseLeave={() => setHover(false)}>
                        
                    </Grid>

                    <Grid item xs={12} sm={6} lg={4} className={classes.video4del} onMouseEnter={() => setHover(true)}  onMouseLeave={() => setHover(false)}>
                        
                    </Grid>

                    <Grid item xs={12} sm={6} lg={4} className={classes.video4del} onMouseEnter={() => setHover(true)}  onMouseLeave={() => setHover(false)}>
                        
                    </Grid>
                </Grid>
                
            </div>
        </div>
    );
}

export default FitnessVideo;
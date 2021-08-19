import { Grid } from "@material-ui/core";
import React from "react";
import AdminNav from "../AdminNav/AdminNav";
import useStyles from "./styles";


const Admin = () => {
  const classes = useStyles();
  return (
    <>
      <AdminNav />
      <div container className={classes.container}>
        <div className={classes.plankSpace}></div>
        <div className={classes.right} style={{ width: '100%' }}>
          <Grid container style={{ padding: '10px 20px 0px 20px' }}>
            <Grid item xs={12} lg={3} style={{ display: 'flex', backgroundColor: 'white', width: '150px', height: '100px', marginBottom: '15px' }}>
              <div style={{ backgroundColor: '#052963', display: 'flex', width: '65%', height: '100px', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
                <div style={{ marginTop: '15px', fontWeight: '450' }}>
                  Have
                </div>
                <div style={{ marginTop: '8px', fontWeight: '600', fontSize: '25px' }}>
                  Users
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35%', fontWeight: '500', fontSize: '30px', color: 'grey' }}>
                20
              </div>
            </Grid>

            <Grid item xs={12} lg={3} style={{ display: 'flex', backgroundColor: 'white', width: '150px', height: '100px', marginBottom: '15px' }}>
              <div style={{ backgroundColor: '#00c6d7', display: 'flex', width: '65%', height: '100px', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
                <div style={{ marginTop: '15px', fontWeight: '450' }}>
                  Have
                </div>
                <div style={{ marginTop: '8px', fontWeight: '600', fontSize: '25px' }}>
                  Ingredients
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35%', fontWeight: '500', fontSize: '30px', color: 'grey' }}>
                20
              </div>
            </Grid>

            <Grid item xs={12} lg={3} style={{ display: 'flex', backgroundColor: 'white', width: '150px', height: '100px', marginBottom: '15px' }}>
              <div style={{ backgroundColor: '#052963', display: 'flex', width: '65%', height: '100px', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
                <div style={{ marginTop: '15px', fontWeight: '450' }}>
                  Have
                </div>
                <div style={{ marginTop: '8px', fontWeight: '600', fontSize: '25px' }}>
                  Meals
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35%', fontWeight: '500', fontSize: '30px', color: 'grey' }}>
                20
              </div>
            </Grid>

            <Grid item xs={12} lg={3} style={{ display: 'flex', backgroundColor: 'white', width: '150px', height: '100px', marginBottom: '15px' }}>
              <div style={{ backgroundColor: '#00c6d7', display: 'flex', width: '65%', height: '100px', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
                <div style={{ marginTop: '15px', fontWeight: '450' }}>
                  Have
                </div>
                <div style={{ marginTop: '8px', fontWeight: '600', fontSize: '25px', textAlign: 'center' }}>
                  Total Orders
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35%', fontWeight: '500', fontSize: '30px', color: 'grey' }}>
                20
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Admin;

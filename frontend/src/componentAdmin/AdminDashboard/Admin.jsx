import {
  Avatar, Grid
} from "@material-ui/core";
import CommentIcon from '@material-ui/icons/Comment';
import CreateIcon from '@material-ui/icons/Create';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import React, { useState } from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const Admin = () => {
  const classes = useStyles();
  const userSignIn = useSelector(state => state.userSignIn);

  //for hover
  const [hoverDashboard, setHoverDashboard] = useState(false);
  const [hoverIngredient, setHoverIngredient] = useState(false);
  const [hoverUser, setHoverUser] = useState(false);
  const [hoverOrder, setHoverOrder] = useState(false);
  const [hoverMeal, setHoverMeal] = useState(false);
  const [hoverVideo, setHoverVideo] = useState(false);
  const [hoverRecommendation, setHoverRecommendation] = useState(false);
  const [hoverLogin, setHoverLogin] = useState(false);
  

  const { userInfo } = userSignIn;

  console.log(hoverDashboard);

  return (
    <>
        <div className={classes.sideBar}>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#052963', color: 'white', height: '50px' }}>
            <div style={{ flexGrow: '1', fontWeight: '550', fontSize: '32px', textAlign: 'center' }}>
              Fitnezz 
            </div>
          </div>

          <div className={classes.adminInfo} >
            <Avatar aria-controls="customized-menu"aria-haspopup="true" alt={userInfo.name} style={{ marginTop: '15px', border: 'solid 1px #052963', width: '60px', height: '60px', color: '#052963' }}>{userInfo.name.charAt(0)}</Avatar>

            <div style={{ marginTop: '10px' }}>
              {userInfo.name}
            </div>

            <div style={{ marginTop: '15px' }}>
              {userInfo.email}
            </div>

            <div style={{ marginTop: '15px' }}>
              Admin
            </div>
          </div>

          

          <div className={hoverDashboard ? classes.itemHover : classes.item} onMouseEnter={() => setHoverDashboard(true)} onMouseLeave={() => setHoverDashboard(false)} >
            <DashboardIcon/>
            <div style={{ marginLeft: '5px' }}>
              Dashboard
            </div>
          </div>

          <div className={hoverIngredient ? classes.itemHover : classes.item} onMouseEnter={() => setHoverIngredient(true)} onMouseLeave={() => setHoverIngredient(false)}>
            <CreateIcon/>
            <div style={{ marginLeft: '5px' }}>
              Ingredients
            </div>
          </div>

          <div className={hoverUser ? classes.itemHover : classes.item} onMouseEnter={() => setHoverUser(true)} onMouseLeave={() => setHoverUser(false)}>
            <PeopleIcon/>
            <div style={{ marginLeft: '5px' }}>
              Users
            </div>
          </div>

          <div className={hoverOrder ? classes.itemHover : classes.item} onMouseEnter={() => setHoverOrder(true)} onMouseLeave={() => setHoverOrder(false)}>
            <ShoppingBasketIcon/>
            <div style={{ marginLeft: '5px' }}>
              Orders
            </div>
          </div>

          <div className={hoverMeal ? classes.itemHover : classes.item} onMouseEnter={() => setHoverMeal(true)} onMouseLeave={() => setHoverMeal(false)}>
            <FastfoodIcon/>
            <div style={{ marginLeft: '5px' }}>
              Meals
            </div>
          </div>

          <div className={hoverVideo ? classes.itemHover : classes.item} onMouseEnter={() => setHoverVideo(true)} onMouseLeave={() => setHoverVideo(false)}>
            <VideoLibraryIcon/>
            <div style={{ marginLeft: '5px' }}>
              Videos
            </div>
          </div>
          
          <div className={hoverRecommendation ? classes.itemHover : classes.item} onMouseEnter={() => setHoverRecommendation(true)} onMouseLeave={() => setHoverRecommendation(false)}>
            <CommentIcon/>
            <div style={{ marginLeft: '5px' }}>
              Recommendations
            </div>
          </div>

          <div className={hoverLogin ? classes.itemHover : classes.item} onMouseEnter={() => setHoverLogin(true)} onMouseLeave={() => setHoverLogin(false)}>
            <ExitToAppIcon/>
            <div style={{ marginLeft: '5px' }}>
              Logout
            </div>
          </div>

        </div>
        <div container className={classes.container}>
            <div className={classes.plankSpace}></div>
            <div className={classes.right} style={{ width: '100%' }}>
              <Grid container style={{ padding: '10px 20px 0px 20px' }}>
                <Grid item xs={12} lg={3} style={{ display: 'flex', backgroundColor: 'white', width: '150px', height: '100px', marginBottom: '15px'}}>
                  <div style={{ backgroundColor: '#052963', display: 'flex', width: '65%', height: '100px', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
                      <div style={{ marginTop: '15px', fontWeight: '450' }}>
                        Have
                      </div>
                      <div style={{ marginTop: '8px', fontWeight: '600', fontSize: '25px' }}>
                        Users
                      </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35%', fontWeight: '500', fontSize: '30px', color: 'grey'}}>
                    20
                  </div>
                </Grid>

                <Grid item xs={12} lg={3} style={{ display: 'flex', backgroundColor: 'white', width: '150px', height: '100px', marginBottom: '15px'}}>
                  <div style={{ backgroundColor: '#00c6d7', display: 'flex', width: '65%', height: '100px', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
                      <div style={{ marginTop: '15px', fontWeight: '450' }}>
                        Have
                      </div>
                      <div style={{ marginTop: '8px', fontWeight: '600', fontSize: '25px' }}>
                        Ingredients 
                      </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35%', fontWeight: '500', fontSize: '30px', color: 'grey'}}>
                    20
                  </div>
                </Grid>

                <Grid item xs={12} lg={3} style={{ display: 'flex', backgroundColor: 'white', width: '150px', height: '100px', marginBottom: '15px'}}>
                  <div style={{ backgroundColor: '#052963', display: 'flex', width: '65%', height: '100px', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
                      <div style={{ marginTop: '15px', fontWeight: '450' }}>
                        Have
                      </div>
                      <div style={{ marginTop: '8px', fontWeight: '600', fontSize: '25px' }}>
                        Meals
                      </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35%', fontWeight: '500', fontSize: '30px', color: 'grey'}}>
                    20
                  </div>
                </Grid>

                <Grid item xs={12} lg={3} style={{ display: 'flex', backgroundColor: 'white', width: '150px', height: '100px', marginBottom: '15px'}}>
                  <div style={{ backgroundColor: '#00c6d7', display: 'flex', width: '65%', height: '100px', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
                      <div style={{ marginTop: '15px', fontWeight: '450' }}>
                        Have
                      </div>
                      <div style={{ marginTop: '8px', fontWeight: '600', fontSize: '25px', textAlign: 'center' }}>
                        Total Orders
                      </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35%', fontWeight: '500', fontSize: '30px', color: 'grey'}}>
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

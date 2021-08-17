import { AppBar, Avatar, Badge, Button, Grid, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ShoppingCart } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { signout } from '../../actions/userActions';
import useStyles from './styles';
const NavBar = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const cartItems = useSelector(state => state.cart.cartItems)
    const userSignIn = useSelector((state) => state.userSignIn)
    const { userInfo } = userSignIn
    const signoutHandler = () => {
        dispatch(signout())
        history.push('/')
        setAnchorEl(null)
    }
    const classes = useStyles();
    const StyledMenu = withStyles({
        paper: {
            border: '1px solid #d3d4d5',
        },
    })((props) => (
        <Menu
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            {...props}
        />
    ));
    const StyledMenuItem = withStyles((theme) => ({
        root: {
            '&:focus': {
                backgroundColor: theme.palette.primary.main,
                '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                    color: theme.palette.common.white,
                },
            },
        },
    }))(MenuItem);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography component={Link} to="/" variant='h6' color="inherit" className={classes.logoTitle}>
                        FITNEZZ
                    </Typography>
                    <Typography className={classes.itemsWrapper} >
                        <Grid container justifyContent="center" spacing={5} >
                            <Grid item >
                                <Button component={Link} to="/" variant="text" color="inherit" >Home</Button>
                            </Grid>
                            <Grid item>
                                <Button component={Link} to="/products" color="inherit" >Product</Button>
                            </Grid  >
                            <Grid item >
                                <Button color="inherit" >Contact</Button>
                            </Grid>
                            <Grid item >
                                <Button color="inherit">NguHH</Button>
                            </Grid>
                        </Grid>
                    </Typography>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={cartItems && cartItems.length} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    {userInfo ? (
                        <div>
                            <Avatar onClick={handleClick} aria-controls="customized-menu"
                                aria-haspopup="true" className={classes.pink} alt={userInfo.name}>{userInfo.name.charAt(0)}
                            </Avatar>
                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                            >
                                <StyledMenuItem component={Link} to="/userprofile" onClick={handleClose}>
                                    <ListItemIcon>
                                        <AccountCircleIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="My Profile" />
                                </StyledMenuItem>
                                <StyledMenuItem onClick={signoutHandler}>
                                    <ListItemIcon>
                                        <ExitToAppIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Sign Out" />
                                </StyledMenuItem>

                            </StyledMenu>
                        </div>
                    )
                        :
                        <Button component={Link} to="/signin" variant="outlined" color="inherit" className={classes.login}>Login</Button>
                    }
                </Toolbar>
            </AppBar>
        </div >
    );
}

export default NavBar

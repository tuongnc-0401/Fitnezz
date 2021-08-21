import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    bigPicture: {
        height: '600px',
        width: '100%',
        // backgroundColor: 'yellow',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // filter: 'blur(8px)',
    },

    information: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            // backgroundColor: 'yellow',
            justifyContent: 'center',
        },
    },

    forTheme: {
        width: '460px',
        height: '100%',
        marginRight: '300px',
        [theme.breakpoints.down('sm')]: {
            marginRight: '0px',
        },
    },

    info: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '15px 0px',
    },

    icon: {
        fontSize: '28px',
    },

    duration: {
        fontWeight: '700',
        fontSize: '18px',
        marginBottom: '5px',
    },

    bottom: {
        fontSize: '18px',
    },


    container: {
        width: '100%',
        // backgroundColor: 'aqua',
    },

    line: {
        width: '10%',
        height: '60px',
        borderBottom: 'solid 1px black',
    },

    toWrap: {
        width: '100%',
        display: 'flex',
    },

    timeLine: {
        width: '10%', 
        height: '447px', 
        // backgroundColor: 'red'
    },

    contentRight: {
        width: '90%',
        height: '90%',
        // backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'column',
        // marginTop: '30px',
        // marginBottom: '50px',
    },
}));
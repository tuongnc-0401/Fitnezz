import { makeStyles } from "@material-ui/core";
import Img from './logo.jpg';

export default makeStyles(() => ({
    bigPicture: {
        height: '700px',
        width: '100%',
        backgroundImage: `url(${Img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },

    body: {
        width: '100%',
        height: '100%',
        padding: '0px 18%',
        boxSizing: 'border-box',
    },

    line: {
        width: '10%',
        height: '60px',
        borderBottom: 'solid 1px black',
    },

    showRec: {
        display: 'flex',
        margin: '0px',
        width: '90%',
        overflow: 'hidden',
        justifyContent: 'flex-start',
        boxSizing: 'border-box',
        paddingBottom: '0px',
        // transform: 'translateX(-360px)',
    },

    showVideo: {
        // backgroundColor: 'blue',
        display: 'flex',
        margin: '0px',
        flexGrow: 1,
        boxSizing: 'border-box',
        paddingBottom: '0px',
    },

    video4del: {
        backgroundColor: 'white',
        height: '100px',
        zIndex: '5',
    },
}));
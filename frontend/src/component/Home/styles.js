import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        width: '100%',
        height: '100%',
    },
    mainContent: {
        position: 'fixed',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://www.chloeting.com/splash/bg-img.jpeg)',
        // backgroundImage: 'url(/img_1.jpg)',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    pink: {
        color: '#f73471'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.1)',
    },
    titleContent: {
        position: "relative",
        marginTop: "159px",
        padding: "2.94rem 3.6rem 0",
        color: "#000",
    },
    btnsHolder: {
        alignItems: "center",
        marginTop: "60px",

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '200px',
        padding: '15px 0',
        marginRight: '30px',
        marginBottom: '20px',
        border: '1px solid rgba(0, 0, 0, 0.8)',
        borderRadius: '5px',
        fontFamily: "'Heebo', sans-serif",
        fontWeight: 400,
        fontStyle: 'normal',
        letterSpacing: '0.1em',
        color: 'white',
        cursor: 'pointer',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    }
}));
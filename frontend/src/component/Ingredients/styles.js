import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3),
    },
    gridContainer: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },
    },
    pink: {
        color: '#f73471'
    },
    fixed: {
        [theme.breakpoints.up('lg')]: {
            position: "fixed",
            width: '30%',
            right: '10px'
        },
        [theme.breakpoints.up('md')]: {
            position: 'fixed',
            width: '38%',
            right: '10px'
        },
        [theme.breakpoints.up('sm')]: {
            position: 'fixed',
            width: '50%',
            right: '10px'
        },
    },
    filter: {
        [theme.breakpoints.down('lg')]: {
            width: '23%',
            padding: '5px',
            marginBottom: '10px'
        },
        [theme.breakpoints.down('md')]: {
            width: '31%',
            padding: '5px',
            marginBottom: '10px'
        },
        [theme.breakpoints.down('sm')]: {
            width: '47.5%',
            padding: '5px',
            marginBottom: '10px'
        },
        [theme.breakpoints.down('xs')]: {
            width: '98%',
            padding: '5px',
            marginBottom: '10px'
        }
    }


}));
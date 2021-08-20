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

    }


}));
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles.js'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
const Ingredient = ({ ingredient }) => {
    const classes = useStyles()
    return (
        <Card className={classes.root} elevation={6}>
            <CardHeader
                title={ingredient.name}
                style={{ textAlign: 'center' }}
            />
            <CardMedia
                className={classes.media}
                image={ingredient.image}
                title="Paella dish"
            />
            <CardContent className={classes.cardContent}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {ingredient.details}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <Typography variant="body1" style={{ color: '#f73471' }}>{ingredient.calories} kcal/g</Typography>
                <Button variant="contained" style={{ borderRadius: '20px', backgroundColor: '#f73471', color: '#fff' }}>ADD TO LIST</Button>
            </CardActions>
        </Card>
    )
}

export default Ingredient

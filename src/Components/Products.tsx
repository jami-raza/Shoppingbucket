import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux'
import {ProductItem} from '../global'
import {add} from '../Store/Reducer';
import {store} from '../Store/Store'
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    media:{
        height:140,
        width:200,
    },
  });

 const Products = () => {
    
    const classes = useStyles();
    const products = useSelector((state: ProductItem[]) => state)
    const shoe = products.map((shoe,i) =>{
    
    return(
        
         <Grid container spacing={3}>   
            
            
        
         <Grid item xs={6} sm={3} key={i}>
            <Box p={1} m={1}>
                <img src={shoe.imageUrl} className={classes.media}/>
                <Typography component="h2" variant="h5">
                    {shoe.title}
                </Typography>
                <Typography component="h2" variant="h5">
                   {shoe.description}
                </Typography>
                <Button 
                disabled={shoe.added}
                onClick={()=> store.dispatch(add(shoe))}
                >
                    Add to basket
                </Button>
            </Box>

         </Grid> 
        
        </Grid>
    )
})
return(
    <div>
        {shoe}
    </div>
)
}
export default Products;
import React from 'react'
import {useSelector} from 'react-redux'
import {ProductItem} from '../global'
import {remove} from '../Store/Reducer'
import {store} from '../Store/Store'
import  Grid  from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from "@material-ui/icons/Delete"
import IconButton from '@material-ui/core/IconButton'
import { ListItemSecondaryAction } from '@material-ui/core'


const Basket = () =>{
    const product:ProductItem[] = useSelector((state:ProductItem[])=> state)
    
    return(
    <Grid>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Shopping Basket
      </Typography>
      <Typography component="p" variant="body1">
          You have {product.filter(product => product.added).length} items in your basket
      </Typography>
      <List>
          {product
          .filter(product=>product.added)
          .map((product)=>(
           <React.Fragment key={product.id}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="product" src={product.imageUrl}/>
                </ListItemAvatar>
                <ListItemText
                primary = {product.title}
                secondary = {
                    <React.Fragment>
                        <Typography component="span"
                        variant="body2"
                        color="textPrimary">
                            &Rupees;{(product.price / 100).toFixed(2)}
                        </Typography>
                        {`-${product.description}`}
                    </React.Fragment>
                }
                />
                    <ListItemSecondaryAction>
                        <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={()=> store.dispatch(remove({id:product.id}))}
                        >
                            <DeleteIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                
            </ListItem>
            <Divider variant="inset" component="li" />
            </React.Fragment>   
          ))
          }
      </List>
    </Grid>
    )
}
 export default Basket;
import React from 'react'
import {useSelector} from 'react-redux'
import {ProductItem} from '../global'
import {remove,addquantity,clear} from '../Store/Reducer'
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
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { ListItemSecondaryAction } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Basket = () =>{
    const product:ProductItem[] = useSelector((state:ProductItem[])=> state)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return(
    <Grid>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Cart{product.filter(product => product.added).length}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
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
                            &Rupees;{(product.price * product.quantity)}
                        </Typography>
                        {`-${product.quantity}`}
                    </React.Fragment>
                }
                />
                    <ListItemSecondaryAction>
                        <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={()=> store.dispatch(clear({id:product.id}))}
                        >
                            <DeleteIcon/>
                        </IconButton>
                        <Button onClick={()=> store.dispatch(remove({id:product.id}))}>-</Button>
                        <Button onClick={()=> store.dispatch(addquantity({id:product.id}))}>+</Button>
                    </ListItemSecondaryAction>
                
            </ListItem>
            <Divider variant="inset" component="li" />
            </React.Fragment>   
          ))
          }
          <ListItem>
              <Typography variant="subtitle1"> 
                &Rupees;
                {(
                    product
                    .filter(product => product.added)
                    .reduce((acc, current) => (acc + current.price) * current.quantity, 0)
                ).toFixed(2)}
              </Typography>
          </ListItem>
      </List>
      </Dialog>
    </Grid>
    )
}
 export default Basket;
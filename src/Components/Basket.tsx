import React from 'react'
import { useSelector } from 'react-redux'
import { ProductItem } from '../global'
import { remove, addquantity, clear } from '../Store/Reducer'
import { store } from '../Store/Store'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from "@material-ui/icons/Delete"
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  inline: {
    display: "inline",
  },
  head: {
    margin: 10,
    paddingTop: 2,
    alignContent: "center",
  }

})

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Basket = () => {
  const classes = useStyles()
  const product: ProductItem[] = useSelector((state: ProductItem[]) => state)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <ShoppingCartOutlinedIcon />{product.filter(product => product.added).length}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className={classes.root}
      >
        <TableContainer component={Paper}>
          <Table>

            <TableHead>
              <Typography className={classes.head}>
                You have {product.filter(product => product.added).length} items in your basket
            </Typography>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Add quantity</TableCell>
                <TableCell align="right">Minus quantity</TableCell>
                <TableCell align="right">Remove Product</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {product
                .filter(product => product.added)
                .map((product) => (
                  <TableRow key={product.id}>
                    <TableCell component="th" scope="row">
                      <Avatar
                        alt={product.title}
                        src={product.imageUrl}
                      />
                      <Typography component="p">
                        {product.title}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">{product.price * product.quantity}</TableCell>
                    <TableCell align="right">{product.quantity}</TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => store.dispatch((addquantity({ id: product.id })))}>
                        <AddIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => store.dispatch(remove({ id: product.id }))}>
                        <RemoveIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => store.dispatch(clear({ id: product.id }))}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))  
              }
              <TableRow>
                <TableCell colSpan={1}>Total</TableCell>
                <TableCell align="right">
                  <Typography className={classes.inline}>
                    <AttachMoneyIcon />
                    {(
                      product
                        .filter(product => product.added)
                        .reduce((acc, current) => (acc + current.price) * current.quantity, 0)
                    ).toFixed(2)}
                  </Typography>
                </TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Dialog>
    </Grid>
  )
}
export default Basket;
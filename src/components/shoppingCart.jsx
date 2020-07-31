import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';

import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import {connect} from 'react-redux';
import {setActiveCategory, getCategories, getProducts, adjustInventory} from '../store/categories.jsx'
import {addToCart, removeFromCart, reset} from '../store/cart.jsx'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  formRoot: {
      display:'flex',
      flexWrap:"true",
      margin: theme.spacing(1),
      width: '25ch',
      marginTop:'25px',
  },
  buyButton: {
    margin:'2em',
    marginLeft:'35px'
  }
}));



const ShoppingCart = (props) => {
  const classes = useStyles();
  
  console.log(props.cart)

  const sum = () => {
    let added = 0;
    props.cart.forEach( item => {
      added += parseFloat(item.price);
    })
    return added.toString();
  }


  return (
    <>
    <Container maxWidth="fluid">
    <List>
    {props.cart.map( (item) => {
        return(
        <ListItem>
         <ListItem>
                  <ListItemText
                    primary={item.name}
                    secondary={'secondary' ? '$'+item.price : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
        </ListItem>
        )
      })}
  
      </List>

      <Typography>
      TOTAL:   ${sum()}
      </Typography>
     <Divider />
<Grid container spacing={3} >
  <Grid item xs m l xl >
     <form  noValidate autoComplete="off">
      <div className={classes.billing}>
        <Typography component="h2">Billing Details</Typography>
        <TextField required id="fullname" label="Required" defaultValue="Full Name" />
        <TextField  id="City" label="Address" defaultValue="123 First Ave" />
        <TextField
          id="city"
          label="City"
          defaultValue="City"
        />
        <TextField
          id="state"
          label="State"
          defaultValue="State"
        />
        <TextField
          id="zip"
          label="Zip"
          defaultValue="Zip"
        />
      </div>
      </form>
      </Grid>
      <Grid item xs m l xl >
        <form>
      <div className={classes.credit}>
        <Typography component="h2">Payment Details</Typography>
        <TextField required id="CreditCard" label="Required" defaultValue="Credit Card #" />
        <TextField
        id="date"
        label="Expiration Date"
        type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
      />
        <TextField
          id="state"
          label="State"
          defaultValue="State"
        />
        <TextField
          id="zip"
          label="Zip"
          defaultValue="Zip"
        />
      </div>
      <Button className={classes.buyButton}color="primary" variant="contained" >BUY NOW!</Button>
</form>
</Grid>
</Grid>
</Container>
    </>
  )
}
const checkAvailable = (product) => {
  if(product.count > 0 ){
    return 'Available'
  } else {
    return 'Not Available'
  }
}

const disabled = (product) => {
  if(product.count > 0 ){
    return false
  } else {
    return 'disabled'
  }
}

const mapStateToProps = state => {
  return {
    activeCategory: state.category.activeCategory,
    categories: state.category.categories,
    products: state.category.products,
    cart: state.cart,
  }
}
const mapDispatchToProps = {setActiveCategory, addToCart, removeFromCart, reset, getCategories, getProducts, adjustInventory};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
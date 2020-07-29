import React from 'react';
import {connect} from 'react-redux';
import {addToCart, removeFromCart, reset} from '../store/cart.jsx'
import { makeStyles } from '@material-ui/core/styles';

import {List, ListItem, ListItemText, IconButton, Grid, ListItemSecondaryAction, Paper} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  page: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  simpleCart: {
    position:'absolute',
    top:'120px',
    width:'20vw',
    right:'30px',
  }
}));

const SimpleCart = (props)=> {
  const classes = useStyles();


  return (
      < >
      <div className={classes.simpleCart}>
      <Grid item>
          <div className={classes.page}>
            <List dense='true'>
              {props.cart.map( (item) => {
                return (
                  <Paper>
                  <ListItem>
                  <ListItemText
                    primary={item.name}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" color="secondary" onClick={ (event) => {
                      event.preventDefault()
                      props.removeFromCart(item)
                      item.count += 1;
                    }}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                </Paper>
                )
              }
              )}
               
            </List>
          </div>
        </Grid>
        </div>
      </>
    )
}


const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}
const mapDispatchToProps = { addToCart, removeFromCart, reset};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
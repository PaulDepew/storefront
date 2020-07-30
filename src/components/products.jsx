import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {setActiveCategory, getCategories, getProducts, adjustInventory} from '../store/categories.jsx'
import {addToCart, removeFromCart, reset} from '../store/cart.jsx'



const useStyles = makeStyles((theme) => ({
  productsRoot: {
    display: 'flex',
    flexWrap: 'true',
    padding: '1em',
    justifyContent:'center',
  },
  card: {
    margin: '1em',
    width: 'auto',
  },
  media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
  }
));


const Products = (props) => {
  const classes = useStyles();
  
  useEffect(() => {
      props.getCategories();
      props.getProducts();
  }, []);

  console.log(props);
  return (
    <Container maxWidth="fluid">
      <div className={classes.productsRoot}>
        {props.products.map(product => {
          if(product.category === props.activeCategory){

            return(
            <Card className={classes.card} >
            <CardHeader title={product.name} subheader={`${checkAvailable(product)} (${product.count})` }
             />
            <CardMedia 
            className={classes.media} 
              image="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"
              />
              <CardContent>
               <Button size="small">Show Details</Button>
                <Divider />
                <Button 
                disabled={disabled(product)}
                onClick={(e) => {
                  e.preventDefault();
                  props.addToCart(product)
                  product.count -= 1;
                }}
                >
                  Add To Cart
                  </Button>
              </CardContent>

          </Card>

            )
          } else {
            return(null);
          }
          
        })}
        
      </div>
    </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);

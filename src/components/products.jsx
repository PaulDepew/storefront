import React from 'react';
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
import {setActiveCategory} from '../store/categories.jsx'


const useStyles = makeStyles((theme) => ({
  productsRoot: {
    display: 'flex',
    flexWrap: 'true',
    padding: '1em',
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
  

  return (
    <Container maxWidth="fluid">
      <div className={classes.productsRoot}>
        {props.products.map(product => {
          if(product.category === props.activeCategory){

            return(
            <Card className={classes.card} >
            <CardHeader title={product.name} subheader={checkAvaiable(product)}
             />
            <CardMedia 
            className={classes.media} 
              image="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"
              />
              <CardContent>
               <Button>Show Details</Button>
                <Divider />
                <Button>Add To Cart</Button>
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
const checkAvaiable = (product) => {
  if(product.count > 0 ){
    return 'Available'
  } else {
    return 'Not Available'
  }
}

const mapStateToProps = state => {
  return {
    activeCategory: state.category.activeCategory,
    categories: state.category.categories,
    products: state.category.products,
  }
}
const mapDispatchToProps = {setActiveCategory};

export default connect(mapStateToProps, mapDispatchToProps)(Products);

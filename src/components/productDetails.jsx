import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {setActiveCategory, getCategories, getProducts, adjustInventory} from '../store/categories.jsx'
import {addToCart, removeFromCart, reset} from '../store/cart.jsx'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion'
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


const useStyles = makeStyles({
  productRoot: {
    maxWidth: '100vw',
    margin: '1em',
  },
  description: {
    paddingLeft:'10px',
  },
  reviewRoot: {
    width: '100%',
  },
  inline: {
    display: 'inline',
  },
  specRoot: {
    width: '100%',
  },
  relevantRoot: {
    width: '100%',
    maxWidth: 360,
  },
});


const Details = (props) => {
  const classes = useStyles();
  
  useEffect(() => {
      props.getCategories();
      props.getProducts();
  }, []);

  console.log(props);

  return (
    <>
    <Card className={classes.productRoot}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://images.pexels.com/photos/953457/pexels-photo-953457.jpeg?cs=srgb&dl=pexels-william-matte-953457.jpg&fm=jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
          <Badge badgeContent={props.activeProduct.count} color='primary'>
            <Typography gutterBottom variant="h5" component="h2">
              {props.activeProduct.name}
            </Typography>
            <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
              {props.activeProduct.description}
            </Typography>
        </Badge>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary" variant="contained" disabled={disabled(props.activeProduct)}
                onClick={(e) => {
                  e.preventDefault();
                  props.addToCart(props.activeProduct)
                  props.activeProduct.count -= 1;
                }}>
            Buy
          </Button>
          <Typography>${props.activeProduct.price}</Typography>
        </CardActions>
      </Card>
      <Card>
      <List className={classes.reviewRoot}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="This Product Rocks!"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I Love This Computer! Keep..."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="terrible service"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — I wish I could affor this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Sandra Adams
              </Typography>
              {' — YES PLEASE…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Card>
      <div className={classes.specRoot}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Specifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.activeProduct.category}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Related Items</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Wine" secondary="$12" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bears" secondary="$1000" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Food" secondary="$5.99" />
      </ListItem>
    </List>
        </AccordionDetails>
      </Accordion>
    </div>
    
      </>
    );
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
    activeProduct: state.category.activeProduct,
  }
}
const mapDispatchToProps = {setActiveCategory, addToCart, removeFromCart, reset, getCategories, getProducts, adjustInventory};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
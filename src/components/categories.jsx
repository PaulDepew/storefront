import React from 'react';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {setActiveCategory} from '../store/categories.jsx'

const useStyles = makeStyles((theme) => ({
  categoriesRoot: {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px',
    width:'30vw',
  },
  categories: {
    display:'flex',
    flexDirection:'row',
    alignItems:'baseline',
    padding: '.25em',
    marginBottom:'20px',
    justifyContent:'center',
  },
  links: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    padding:'1em',
  },
  CurrentSelection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));
const Categories = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="fluid">
      <div className={classes.categoriesRoot}>

      
      <Typography variant="h6" noWrap gutterBottom="true">
     Browse our Categories
      <Divider />
      </Typography>
      <div className={classes.categories}>
      
      {props.categories.map( item => {
        return (
          <Button type="text" color="primary" size="small" value={item.category} className={classes.links} onClick={(event) => {
            event.preventDefault();
            props.setActiveCategory(item.category);
          }}> {item.displayName}
          </Button>
        )
      })}
      </div>
      </div>

      <div className={classes.CurrentSelection}>
    <Typography variant="h4" noWrap >
      {props.activeCategory || 'Choose a Category'}
    </Typography>
    <Typography variant="p" Wrap > 
     {props.categories.map( (description) => {
      if( description.category === props.activeCategory) {
        return (description.description)
      };

     })}
    </Typography>
      </div>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    activeCategory: state.category.activeCategory,
    categories: state.category.categories,
  }
}
const mapDispatchToProps = {setActiveCategory};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);


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
    alignItems: 'flex-start',
    margin: '20px',
  },
  categories: {
    alignItems:'center',
    padding: '.5em',
  },
  links: {
    padding:'1em',
    margin:'5px',
    display: 'inline-block'
  },
  CurrentSelection: {
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
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
      </Typography>
      <div className={classes.categories}>
        <Divider />
        <ul>
      {props.categories.map( item => {
        return (
          <Button value={item.category} className={classes.links} onClick={(event) => {
            event.preventDefault();
            props.setActiveCategory(item.category);
          }}> {item.displayName}
          </Button>
        )
      })}
      </ul>
      </div>
      </div>

      <div className={classes.CurrentSelection}>
    <Typography variant="h2" noWrap >
      {props.activeCategory || 'Choose a Category'}
    </Typography>
    <Typography variant="h5" Wrap > 
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
  console.log(state.category.activeCategory)
  return {
    activeCategory: state.category.activeCategory,
    categories: state.category.categories,
  }
}
const mapDispatchToProps = {setActiveCategory};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);


import React from 'react';
import {AppBar, IconButton, Typography, InputBase, Badge} from '@material-ui/core';
import ToolBar from '@material-ui/core/Toolbar'
import { StoreMallDirectoryOutlined} from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { fade, makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '15ch',
      },
    },
  },
  logo: {
    marginRight: theme.spacing(2),
    color: 'white',
    width:'1em',
  },
  Cart: {
    display:'flex',
    alignItems: 'flex-end' ,
  },
  Bar: {
    display:"flex",
    alignItems:'center',
    justifyContent:'space-between',
    margin:'1em'
  },
  badge: {
    right: -28,
    top: -13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <div className={classes.headerRoot}>
      <ToolBar className={classes.Bar}>
        <IconButton edge="start" >
          <StoreMallDirectoryOutlined className={classes.logo} />
        </IconButton>
        <Typography className="title" variant="h3" noWrap > 
            Paul's Store!
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Category"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            />
        </div>
        <IconButton edge='end' disableRipple="false" size="small"	>
          <Badge badgeContent={
            props.cart.length || '0'} color="secondary" className={classes.badge} />
          <ShoppingCartIcon/>
        </IconButton>
        
      </ToolBar>
      </div>
    </AppBar>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps, null)(Header);
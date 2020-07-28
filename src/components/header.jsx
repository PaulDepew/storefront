import React from 'react';
import {AppBar, IconButton, Typography, InputBase} from '@material-ui/core';
import ToolBar from '@material-ui/core/Toolbar'
import { StoreMallDirectoryOutlined} from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { fade, makeStyles } from '@material-ui/core/styles';


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
  menuButton: {
    marginRight: theme.spacing(2),
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
    color: 'white',
  },
  Bar: {
    alignItems: "center",
  },
  Cart: {
    justifyContent: 'center',
    alignSelf: 'center' ,
    marginLeft: '100px'
  },
}));

const Header = () => {
  const classes = useStyles();


  return (
    <AppBar position="static">
      <ToolBar className={classes.Bar}>
        <IconButton edge="start" >
          <StoreMallDirectoryOutlined className={classes.logo} />
        </IconButton>
        <Typography className="title" variant="h3" noWrap gutterBottom="true"> 
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
        <div className={classes.Cart}>
          <ShoppingCartIcon />
          <span>(3)</span>
        </div>
      </ToolBar>
    </AppBar>
  )
}

export default Header;
import React from 'react';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  footer: {
    display:'flex',
    justifyContent:'center',
  }
}));

const Footer = () => {

  const classes = useStyles();

  return (
    <Container maxWidth="fluid" className={classes.footer}>
    <p>Paul Depew &copy; 2020 </p>
    </Container>
  )
}

export default Footer;
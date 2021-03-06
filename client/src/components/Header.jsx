import React,{useContext} from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {} from '@material-ui/core/colors';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { UserContext } from '../userContext';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';




const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));
const Header = () => {
  const { userstore } = useContext(UserContext);
  console.log(userstore)
  const { dispatch } = useContext(UserContext);
 
  // console.log(orderstore.user)
  // console.log(orderstore.product)
  const classes = useStyles();
  const history = useHistory();

  const onclick = () => {
    history.push('/')
  }
  const onclickloginhandler = () => {
    history.push('/login')
  }
  const onclickcarthandler = () => {
    history.push('/cart')
  }
  const onclickgalleryhandler = () => {
    history.push('/gallery')
  }
  const onclicklogouthandler = ()=>{
  dispatch({type :'logout',payload:{name:userstore.name}})
  window.alert("Logged out successfully")
    history.push('/')
  }
  const Onclicknamehandler = (e) =>{
    e.preventDefault();
    history.push('/OrderHistory')
  }

 
  console.log(userstore.id)
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          <IconButton onClick={onclick}><h5 style={{ paddingLeft: '10px',color:'white', }}>Samsung</h5></IconButton>
        </Typography>
        <IconButton onClick={onclickgalleryhandler}><h5 style={{color:'whitesmoke'}}>Gallery</h5></IconButton>
  <Button onClick={Onclicknamehandler} disabled={!userstore.user}>{userstore.user}</Button>
        <IconButton onClick={onclickloginhandler} ><PersonIcon/></IconButton>
        <IconButton onClick={onclickcarthandler}>
        <ShoppingCartIcon /></IconButton>
        <IconButton onClick={onclicklogouthandler} ><ExitToAppIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Header;

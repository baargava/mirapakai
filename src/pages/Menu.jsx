import { Card, CardActionArea, CardMedia,Box, CardContent, Typography, Button, ButtonGroup } from '@mui/material'
import React,{useState} from 'react'
import Layout from '../components/layout/Layout'
import { MenuList } from '../data/MenuList'
import {Link, NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {ADD,DLT,REMOVE} from '../Redux/actions/actions'
import '../App.css'

const Menu = () => {
  const[data,setData]=useState(MenuList)

  const dispatch=useDispatch();
  
  const send = (e)=>{
    console.log(e);
    dispatch(ADD(e));
  }
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
      setAnchorEl(null);
  };
  
  const dlt = (id)=>{
    dispatch(DLT(id));
}

// remove one
const remove = (item)=>{
  dispatch(REMOVE(item))
}
  
  return (
    <>
    <Layout>
    <Box sx={{display:'flex',flexWrap:'wrap'}}>
    {
    MenuList.map((menu,id)=>{
      return(
        <Card sx={{maxWidth:'390px',display:'flex',m:2,justifyContent:'center'}}>
      <CardActionArea>
      <NavLink to={`/cart/${menu.id}`}>
       
        <CardMedia component='img' src={menu.image} alt={menu.name} sx={{minHeight:'400px'}}/>
        
        </NavLink>
  <CardContent>
    <Typography component="h1" variant='h5' gutterBottom>
      {menu.name}

    </Typography>
    <Typography component="body" variant='h5' gutterBottom>
      {menu.description}
      
    </Typography>
    <Typography component="body" variant='h5' gutterBottom>
      Price:{menu.price}  &nbsp; &nbsp;
      
      
    </Typography>
    <Button variant='contained' onClick={()=> send(menu)}>Add To Cart</Button>
  </CardContent>
      
      </CardActionArea>
    </Card>
      )
    })}

    </Box>

    </Layout>
    </>
  )
}

export default Menu
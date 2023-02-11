import { Box,AppBar,Toolbar,Typography,IconButton,Drawer, Badge, MenuItem } from '@mui/material'
import React,{useState,useEffect}from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link,NavLink } from 'react-router-dom';
import "./Headerstyles.css"
import MenuIcon from '@mui/icons-material/Menu';
import chilli from '../Images/chili-svgrepo-com.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector,useDispatch } from 'react-redux';
import { DLT } from '../Redux/actions/actions';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';

const Header = () => {
  const[mobileOpen,setMobileOpen]=useState(false)
  const[price,setPrice]=useState(0)

  const getdata = useSelector((state)=> state.cartreducer.carts);
  console.log(getdata);

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dlt = (id)=>{
        dispatch(DLT(id))
    }
  
  //handleFunction
  const handleTrigger=()=>{
    setMobileOpen(!mobileOpen)
  }
  const total = ()=>{
    let price = 0;
    getdata.map((ele,k)=>{
        price = ele.price * ele.qnty + price
    });
    setPrice(price);
};

useEffect(()=>{
    total();
},[total])
  
  //drawer
  const drawer =(
    <Box onClick={handleTrigger} 
    sx={{textAlign:'center'}}>
      <Typography color="goldenrod" 
      variant="h6" component="div"
       sx={{flexGrow:1,my:2}}>
    <FastfoodIcon/></Typography>
      <ul className='mobi__menu'>
        <li>
          <NavLink activeClassName='active' to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/menu"} >Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
       
      </ul>
    </Box>
  )
  

  return (
   <Box>
    <AppBar component="nav" sx={{bgcolor:'black'}}>
    <Toolbar >
      <IconButton color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleTrigger}
              >
        <MenuIcon/>
      </IconButton>
      
    <Typography color="goldenrod" variant="h6" component="div" sx={{flexGrow:1}}>
    <img src={chilli} alt='chilli' width='50px' height={'50px'}/>
    Mirapakai</Typography>
    <Box sx={{display:{xs:'none',sm:'block'}}}>
      <ul className='nav__menu'>
        <li>
          <NavLink activeClassName='active'  to={"/"}>Home</NavLink >
        </li>
        <li>
          <NavLink  to={"/menu"}>Menu</NavLink >
        </li>
        <li>
          <NavLink  to={"/about"}>About</NavLink >
        </li>
        <li>
          <NavLink  to={"/contact"}>Contact</NavLink >
        </li> 
        <li>
          <Badge badgeContent={getdata.length} 
                  id="basic-button"

          color="primary"  
          aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
<ShoppingCartIcon/>{" "}
          </Badge>
        </li>
       
      </ul>
    </Box>
    <Menu
          id="basic-menu"
           anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >  
                {
                    getdata.length ? 
                    <div className='card_details' style={{width:"24rem",padding:10}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Restaurant Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    getdata.map((e)=>{
                                        return (
                                            <>
                                                <tr>
                                                    <td>
                                                       <NavLink to={`/cart/${e.id}`}   onClick={handleClose}>
                                                        <img src={e.image} style={{width:"5rem",height:"5rem"}} alt="" />
                                                        </NavLink>                                                    </td>
                                                    <td>
                                                        <p>{e.name}</p>
                                                        <p>Price : ₹{e.price}</p>
                                                        
                                                    </td>

                                                    <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>dlt(e.id)}>
                                                    <i ><DeleteIcon/></i>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                                <p >Total :₹ {price}</p>
                            </tbody>
                        </table>
                    </div>:

                    
                        
                   <div style={{width:"24rem",padding:10,position:"relative"}}>
                    
                    <p style={{fontSize:22}}>Your carts is empty</p>
                   </div>
                    
                              }
                </Menu>

    </Toolbar>
    </AppBar>
    <Box component="nav">
    <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleTrigger}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
              width:"250px"}
              
            }}
          >
            {drawer}
          </Drawer>
      
    </Box>
    <Box >
      <Toolbar/>
    </Box>
   </Box>
  )
}

export default Header
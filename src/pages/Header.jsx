import { Box,AppBar,Toolbar,Typography,IconButton,Drawer, Badge, MenuItem } from '@mui/material'
import React,{useState,useEffect}from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link,NavLink } from 'react-router-dom';
import "./Headerstyles.css"
import MenuIcon from '@mui/icons-material/Menu';
import chilli from '../Images/chili-svgrepo-com.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector,useDispatch } from 'react-redux';
import { DLT,ADD,REMOVE} from '../Redux/actions/actions';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from 'react-router-dom'


const Header = (props) => {
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


   
        
    const [data,setData] = useState([]);
    // console.log(data);
  
    const {id} = useParams();
    // console.log(id);
  
    const history = useNavigate();
  
  
    
    
  
  
    const compare = ()=>{
      let comparedata = getdata.filter((e)=>{
        return e.id == id
      });
      setData(comparedata);
    }
  
    // add data
    
  
    const send = (e)=>{
      // console.log(e);
      dispatch(ADD(e));
    }
    
    const dlt = (id)=>{
      dispatch(DLT(id));
      history("/");
  }
  
  // remove one
  const remove = (item)=>{
    dispatch(REMOVE(item))
  }
  
  
    useEffect(()=>{
      compare();
    },[id])
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
    Mirapakai
    <Badge badgeContent={getdata.length} 
    sx={{display:{sm:"none"}}}
               id="basic-button"
          color="primary"  
          aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
    <ShoppingCartIcon  sx={{ marginLeft:'15em',fontSize:'25px',color:'white',display:{sm:"none"}}}/>
{" "}
          </Badge>
   <Typography>
    </Typography>
    </Typography>
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
                    <div className='card_details' style={{width:"24rem",padding:'10',border:'1px solid black'}}>
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
                                                        <img src={e.image} style={{width:"8rem",height:"5rem"}} alt="" />
                                                        </NavLink>                                                    </td>
                                                    <td>
                                                        <p>{e.name}</p>
                                                        <p>Price : ₹{e.price}</p>
                                                        
                                                    </td>

                                                    <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}} >
                                                    <div  style={{width:100,cursor:"pointer",background:"#ddd",color:"#111",marginTop:'5',display:'flex',justifyContent:'center'}}>
                    <span style={{fontSize:24}} onClick={e.qnty <=1 ? ()=>dlt(e.id) : ()=>remove(e)}>-</span>
                    <span style={{fontSize:22}}>{e.qnty}</span>
                    <span style={{fontSize:24}} onClick={()=>send(e)}>+</span>

                    </div>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                                <div style={{marginLeft:'3em'}}>
                                <p style={{tmarginLeft:'0em',color:'white',backgroundColor:'red',}} >Total :₹ {price}</p>
                                </div>
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
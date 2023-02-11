import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DLT,ADD,REMOVE } from '../Redux/actions/actions'
import './cartDetails.css'
import { Card, CardActionArea,CardMedia,CardContent,Typography } from '@mui/material'

const CartDetails = () => {

  const [data,setData] = useState([]);
  // console.log(data);

  const {id} = useParams();
  // console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();

  
  const getdata = useSelector((state)=> state.cartreducer.carts);
  // console.log(getdata);


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

  return (
    <>
      <div className='conatiner' >
        <h2 >Iteams Details Page
        </h2>

        <section className='section' >
          <div className="iteamsdetails" style={{display:'flex',margin:'1em',justifyContent:'space-evenly'}}>
          {
            data.map((ele)=>{
              return (
                <>
                 <Card sx={{width:'590px',display:'flex',m:2,justifyContent:'center'}}>
      <CardActionArea>

  <CardContent style={{display:'flex'}}>
  <CardMedia component="img" src={ele.image} alt={ele.name} sx={{height:'260px',width:'350px'}}/>

    <Typography component="h1" variant='h5' gutterBottom>
    Dish:{ele.name} <br/>
    Price:{ele.price} <br/>  
    Quantity:{ele.qnty} <br/>
    Total:{ele.price*ele.qnty}
    </Typography>
    <Typography component="body" variant='h5' gutterBottom>

    </Typography>
  </CardContent>
      
      </CardActionArea>
    </Card>
                </>
              )
            })
          }
          </div>
        </section>
      </div>
    </>
  )
}

export default CartDetails
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useLocation } from 'react-router';

const SingleItem = () => {
      
    const [item,setItem] = useState([]);

     const location = useLocation();
    const path = location.pathname.split("/")[2];
    console.log(path);

    
  const url = "http://localhost:5000/api";
  useEffect(()=>{
    const fetchPost = async ()=>{
        const res = await axios.get(`${url}/purchased/${path}`);
        setItem(res.data);
        console.log(item);
    };
    fetchPost();
},[path])

    return (
        <div>
             <div>
             {/* <Button type="submit" variant="outline-success" style={{borderRadius:'5px',float:'right' ,margin:'10px'}}>Buy</Button>{' '} */}
            <img style={{width: '100%', height: '400px', marginTop: '17px', borderRadius: '11px', objectFit: 'cover'}} src='https://images.unsplash.com/photo-1637972598255-64388b943be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' />
            <div style={{display: 'flex',alignItems: 'center', justifyContent: 'space-between'}}><h1>{item.name}</h1>
             
            <p style={{lineHeight:'25px'}}>Price : <b>{item.price}</b></p>
           </div>
            <div style={{display:'flex',justifyContent:'space-between',color:'#c98a2d'}}>
                <p>Owner : <b>{item.username} </b></p>
                <p style={{fontStyle:'italic'}}>{new Date(item.createdAt).toDateString()}</p>
            </div>

        </div>
        </div>
    )
}

export default SingleItem

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Context } from './context/Context';

const User = () => {
    
    const url = "http://localhost:5000/api";
    
    
    const location = useLocation();
    const search =location.search;
    
    const {user,dispatch} = useContext(Context);
    const [sellItem,setSellItem] = useState([]);
    const [purchsedItem,setPurchsedItem] = useState([]);
    console.log(user.name);
    useEffect(()=>{
        const fetchItems = async () =>{
           const res = await axios.get(`${url}/purchased/?user=${user.name}`)
        //    console.log(res);
           setPurchsedItem(res.data);
        }
        const sellItems = async () =>{
            const res1 = await axios.get(`${url}/item/?user=${user.name}`)
            // console.log(res1);
            setSellItem(res1.data);
        }
        fetchItems();
        sellItems();
       },[location])
    return (
        <div>
            <center><img style={{height:'200px',borderRadius:'96px'}} src='https://cdn-icons-png.flaticon.com/512/21/21104.png' />
            
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                      <h5>Items For Sale</h5>
                      <div style={{display:'grid'}}>
                           {sellItem.map(p=>(
                            <Link to={`/item/${p._id}`} style={{textDecoration:'none',color:'#313131'}}>{p.name}</Link>
                          ))}
                       <center> <Button style={{width:'fit-content',marginTop:'10px'}} variant="outline-primary" >Add Item </Button>  </center>
                          </div>
                    </div>
                    <div className='col-md-6'>
                      <h5>Items You Purchased</h5>
                      <div style={{display:'grid'}}>
                           {purchsedItem.map(p=>(
                            <Link to={`/item/${p._id}`} style={{textDecoration:'none',color:'#313131'}}>{p.name}</Link>
                          ))}
                          </div>
                    </div>
                </div>
            </div>
            </center>
        </div>
    )
}

export default User

import React, { useEffect, useState } from 'react'
import Itemm from './Item'
import axios from 'axios'
import { useLocation } from 'react-router';

const Items = () => {
    
const url = "http://localhost:5000/api";
const [Item,setItems] = useState([]);

// const location = useLocation();
// const search =location.search

useEffect(()=>{
 const fetchItems = async () =>{
    const res = await axios.get(`${url}/item`)
    console.log(res);
    setItems(res.data);
 }
 fetchItems()
},[location])
    return (
        <div className='container-fluid' style={{display:"flex",flexWrap:'wrap',alignContent:'center',alignItems:'center'}}>
          {Item.map(item=>(
                  <Itemm Item={item}/>
                ))}
        </div>
    )
}

export default Items

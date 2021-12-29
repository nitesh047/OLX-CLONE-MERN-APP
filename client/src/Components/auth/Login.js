import axios from 'axios';
import React, { useContext, useRef } from 'react'
import { Form,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { Context } from '../context/Context';
import { Navigate, useNavigate } from 'react-router';
const Login = () => {
     const {dispatch ,isFetching} = useContext(Context);
    const userRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();
     
    const url = "http://localhost:5000/api";
 
    const handleeChange=async (e)=>{
       e.preventDefault();
    //   dispatch({type:'LOGIN_START'});
      try {
          const res = await axios.post(`${url}/auth/login`,{
              username: userRef.current.value,
              password: passRef.current.value
            });
            dispatch({type:"LOGIN_SUCCESS" , payload:res.data});
            console.log(res);
            Navigate('/')
        } catch (error) {
            // dispatch({type:"LOGIN_FAILED"});
        }
    }
    
    return (
        <div className="mt-5">
            <Form onSubmit={handleeChange} style={{margin: 'auto',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'25px'}} className="col-lg-3 col-md-4 col-sm-6 col-xs-8">
               <br/><br/>
                <h4 style={{textAlign:'center'}}>Login here</h4>
                <br/>
                <Form.Group style={{marginLeft:'25px',marginRight:'25px'}} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" ref={userRef} />
                </Form.Group>

                <Form.Group style={{marginLeft:'25px',marginRight:'25px'}} className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passRef} />
                </Form.Group>
                <br/>
                <center><Button className="col-md-10" variant="outline-primary" type="submit" disabled={isFetching}>
                    Sign in
                </Button></center>
                <br/><br/>
                <center><p>Didn't have an account? <Link style={{color:'#313131', textDecoration:'none'}} to ='/register'>Register Now.</Link></p></center>
                <br/><br/>
            </Form>
        </div>
    )
}

export default Login

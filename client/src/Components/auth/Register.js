import axios from 'axios';
import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
      const [email,setEmail] = useState('');
      const [error, setError] = useState(false);

      const url = "http://localhost:5000/api";

      const handleChange=async (e)=>{
          setError(false);
          e.preventDefault();
          try {
             const res = await axios.post(`${url}/auth/register`,{
                 username,
                 email, password
             })
             res.data && window.location.replace('/login');
              
          } catch (error) {
              setError(true);
          }
      }

    return (
        <div className="mt-2">
           <Form onSubmit={handleChange} style={{margin: 'auto',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'25px'}} className="col-lg-3 col-md-4 col-sm-6 col-xs-8">
               <br/>
                <h4 style={{textAlign:'center'}}>Register here</h4>
                <br/>
                
                <Form.Group style={{marginLeft:'25px',marginRight:'25px'}} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username"  onChange={e=>setUsername(e.target.value)}/>
                </Form.Group>

                <Form.Group style={{marginLeft:'25px',marginRight:'25px'}} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  onChange={e=>setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group style={{marginLeft:'25px',marginRight:'25px'}} className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"   onChange={e=>setPassword(e.target.value)}/>
                </Form.Group>
                <br/>
                <center><Button className="col-md-10" variant="outline-primary" type="submit">
                    Sign Up
                </Button></center>
                <center style={{color:'red', marginTop:'7px'}}> {error && 'Something Went Wrong'}</center>
                <br/>
                <center><p>Already have an account? <Link style={{color:'#313131', textDecoration:'none'}} to ='/login'>Login Now.</Link></p></center>
                <br/><br/>

            </Form>
        </div>
    )
}

export default Register

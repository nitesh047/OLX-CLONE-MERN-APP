import React, { useContext } from 'react'
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Context } from './context/Context';
import './nav.css'


const Topbar = () => {
    const {user,dispatch} = useContext(Context);
    // console.log(user);

    //  const user = true;
     const handleLogout =()=>{
        dispatch({type:"LOGOUT"})
     }
     
    return (
        
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand to='/' style={{fontFamily:'Lora'}}>BLOGGER</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="linkk"  to="/">HOME</Link>
                            {/* <Link className="linkk" to="/about">ABOUT</Link> */}
                            {/* <Link className="linkk" to="#contact">CONTACT</Link> */}
                            <Link className="linkk" to="/all">ALL-ITEMS</Link>
                           {user ?  <Link className="linkk" to='/login' onClick={handleLogout}>LOGOUT</Link> : <Link className="linkk" to="/logout"></Link>}
                        </Nav>
                        <Nav>
                            {user ? 
                            <Link className="linkk" to ={`/user/${user._id}`}><img style={{width: '40px',height: '40px', borderRadius: '95px'}} src="https://cdn-icons-png.flaticon.com/512/21/21104.png"></img></Link> :  <Link style={{marginTop: '5px'}} className="linkk" to="/login">Sign in</Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Topbar

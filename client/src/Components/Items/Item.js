import React from 'react'
import {Button, Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({Item}) => {
    return (
        <div >
            <Card style={{ width: '18rem',margin:'10px 25px' }}>
                <Card.Img variant="top" style={{height:'220px',width:'100%',objectFit:'cover'}} src="https://images.unsplash.com/photo-1637951695049-9bbfbe118d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                <Card.Body style={{lineHeight:'1rem'}}>
                    <Card.Title>{Item.name}</Card.Title>
                    <Card.Text>
                        {Item.category}
                    </Card.Text>
                    <Card.Text>
                        {Item.price}
                    </Card.Text>
                <Link to={`/buy/${Item._id}`}><Button variant="outline-primary" >Buy </Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item

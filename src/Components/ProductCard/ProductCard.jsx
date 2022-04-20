import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ProductCard = ({ item }) => {
    return (
        <Card style={{ width: '18rem' }} className='m-3'>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.descr}</Card.Text>
                <Card.Text>{item.price}</Card.Text>
                
                <Button variant="secondary">Edit</Button>
                <Button variant="success">Delete</Button>
            </Card.Body>
            </Card>
    );
};

export default ProductCard;
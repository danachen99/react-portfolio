import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Button, Input } from '../../components/Forms';

export default function Home() {

    return (
        <Container>
            <Row>
                <Col size={'md-2'}></Col>
                    <Col size={'md-8'}>
                    <img style={image} src={require('../../assets/images/Danapic.jpeg')} alt={'profilepic'} />
                    
                    </Col>
                <Col size={'md-2'}></Col>
           </Row>
        </Container>
    )
}

const image = {
    width: "200px",
    height: "auto"
   }
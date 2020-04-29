import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
// import { Button, Input } from '../../components/Forms';


export default function Projects() {

    return (
        <Container>
            <Row>
                <Col size={'md-2'}></Col>
                    <Col size={'md-8'}>
                    <img style={image} src={require('../../assets/images/project1.png')} alt={'Project1'} />
                    <img style={image} src={require('../../assets/images/project2.png')} alt={'Project2'} />
                    <img style={image} src={require('../../assets/images/project1.png')} alt={'Project1'} />
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
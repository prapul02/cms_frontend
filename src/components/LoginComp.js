import React from 'react';
import {Container,Row,Col,Form, Button} from 'react-bootstrap';
import PropTypes from "prop-types";

 function LoginForm ({handleonChange,handleonSubmit,email,password})  {
    return(
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Login </h1>
                    <hr/>
                    <Form onSubmit={handleonSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleonChange}
                                placeholder="Enter Email"
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleonChange}
                                placeholder="Password"
                                required
                            />
                        </Form.Group>
                        <Button type="submit">Login</Button>
                    </Form>
                    <hr/>
                </Col>
            </Row>
            
        </Container>
    )
}

LoginForm.propTypes = {
    handleonChange:PropTypes.func.isRequired,
    handleonSubmit:PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    password:PropTypes.string.isRequired
}

export default LoginForm;
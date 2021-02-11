import React, { useState } from 'react'
import { Nav, NavDropdown, Navbar, Container, Button, Modal, Form } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    a, .navbar-brand, .navbar-nav .nav-link{
        color: #adb1b8;
        &:hover {
            color:white
        }
    }
`

let NavBar = () => {

    let [showBlock, SetShowBlock] = useState(false)

    let handlerShow = () => {
        SetShowBlock(!showBlock)
    }

    return (
        <>
            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                    <Container>
                        <Navbar.Brand href="/">Welcome</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/people">People</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                            </Nav>
                            <Nav>
                                <Button variant="primary" className="m-2" onClick={handlerShow}>Sing in</Button>
                                <Button variant="primary" className="m-2" onClick={handlerShow}>Re</Button>


                            </Nav>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
            </Styles>
            <Modal show={showBlock} onHide={handlerShow}>
                <Modal.Header closeButton>
                    <Modal.Title>log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Email Addres</Form.Label>
                            <Form.Control type="email" placeholder="Email"/>
                            <Form.Text className="text-muted"/>
                        </Form.Group>
                        <Form.Group controlId="fromBasicPass">
                            <Form.Label>Email Addres</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                            <Form.Text className="text-muted"/>
                        </Form.Group>
                        <Form.Group controlId="fromBasicCheck">
                            <Form.Check type="checkbox" label="remember my"/>                            
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default NavBar;
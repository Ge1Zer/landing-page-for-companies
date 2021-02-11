import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';


let Plan = (props) => {
    return (
        <Container>
            <Row style={{ margin:'2em 0 2em 0' }}>
                <Col>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Thema</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Descriplion</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )

}
export default Plan
import React from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import ControlledCarousel from '../../../Components/ScrollBarTop'


let Top = (props) => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <ControlledCarousel />
                    </Col>
                </Row>
            </Container>
        </>
    )

}
export default Top


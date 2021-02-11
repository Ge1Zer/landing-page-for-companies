import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components'

let Styles = styled.div`
    .jumbo{
        background: linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5) ),  url(${"https://source.unsplash.com/random"}) no-repeat fixed bottom;
        background-size: cover;
        height: 400px;
        color:white; 
    },
`

let Jumbotron = (props) => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <Container>
                <h1> Hello</h1>
                <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking
                    at its layout. The point of using Lorem Ipsum is that it
                    has a more-or-less normal distribution of letters, as opposed
                    to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many
                    web sites still in their infancy. Various versions have
                    evolved over the years, sometimes by accident, sometimes
                    on purpose (injected humour and the like).
            </p>
            </Container>

        </Jumbo>
    </Styles>
)
export default Jumbotron
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import {Col, Container} from "react-bootstrap";
import Stack from 'react-bootstrap/Stack'



function App() {
    return(
        <div className="App">
            <header className="App-header">VOCO</header>

            <Container className="kast">


                <Stack gap={6}>
                    <div className="chatbox">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <div className="chatbox">Quisque venenatis neque non lorem scelerisque, quis rutrum tellus tempor. et iaculis libero vestibulum vel</div>
                    <div className="chatbox">Interdum et malesuada fames ac ante ipsum primis in faucibus. </div>
                    <div className="chatbox">First item</div>
                    <div className="chatbox">Second item</div>
                    <div className="chatbox">Third item</div>
                </Stack>

            </Container>




        </div>


    )
}

export default App;


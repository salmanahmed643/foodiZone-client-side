import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.form || '/foods';
    const googleIcon = <i className="fab fa-google"></i>;

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then((result) => {
            history.push(redirect_uri)
        })
    }

    return (
        <Container style={{margin: "100px"}}>
            <Row className="justify-content-center align-items-center">
                <div className="text-center">
                    <h1> Login in with Google </h1>
                    <div>
                        <Button onClick={handleGoogleSignIn} className="google_button">
                            {googleIcon}  LogIn
                        </Button>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Login;
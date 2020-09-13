import React from 'react';
import { FormGroup, Label, Col, Form, Input, Card, ButtonToggle } from 'reactstrap'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{
                background: "#fab1a0",
                height: "100vh",
                width: "100vw",
                display: "flex"
            }}>
                <Form>
                    <Card style={styles.card}>
                        <h1 style={{ textAlign: 'center' }}>Register</h1>
                        <FormGroup style={{ justifyContent: 'center' }}>
                            <Label>Username </Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="username" />
                        </FormGroup>
                        <FormGroup style={{ justifyContent: 'center' }}>
                            <Label>Email </Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="email" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password </Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Confirm Password </Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="confirm password" />
                        </FormGroup>
                        <FormGroup>
                            <h1 style={{ marginBottom: '1%', fontSize: '60%' }}>* password must min 6 character</h1>
                            <h1 style={{ marginBottom: '1%', fontSize: '60%' }}>* includes number</h1>
                            <h1 style={{ marginBottom: '1%', fontSize: '60%' }}>* includes special character</h1>
                        </FormGroup>

                        <FormGroup>
                            <Label Check>
                                <Input type="checkbox" />By signing up, you agree to Kevin's Privacy Policy and Terms of Use.
                            </Label>
                        </FormGroup>
                        <ButtonToggle style={styles.buttonLogin}>SIGN UP</ButtonToggle>
                    </Card>
                </Form>
            </div>
        );
    }
}

const styles = {
    card: {
        margin: 'auto',
        width: '70%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '450px',
        backgroundColor: '#ecf0f1'
    },
    buttonLogin: {
        width: '50%',
        height: '10%',
        backgroundColor: 'white',
        marginLeft: '3%',
        color: 'black',
        display: "block",
        cursor: 'pointer'
    }

}

export default Register;
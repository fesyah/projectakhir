import React from 'react';
import { FormGroup, Label, Col, Form, Input, Card, ButtonToggle } from 'reactstrap'

class Login extends React.Component {
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
                display: "flex",
            }}>
                <Form>
                    <Card style={styles.card}>
                        <h1 style={{ textAlign: 'center' }}>LOGIN</h1>
                        <FormGroup style={{justifyContent: 'center'}}>
                            <Label>Email </Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="email" />
                        </FormGroup>

                        <FormGroup>
                            <Label>Password </Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password" />
                        </FormGroup>

                        <ButtonToggle style={styles.buttonLogin}>Login</ButtonToggle>
                    </Card>
                </Form>
            </div>
        );
    }
}

const styles = {
    card: {
        margin: 'auto',
        width: '90%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '450px',
        backgroundColor: '#ecf0f1'
    },
    buttonLogin: {
        width: '50%',
        height: '20%',
        backgroundColor: 'white',
        marginLeft: '3%',
        color: 'black',
        display: "block",
        cursor: 'pointer'  
      }

}


export default Login;
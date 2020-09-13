import React from 'react';
import Axios from 'axios'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import {
    Nav,
    CardHeader,
    ButtonToggle,
    Button
} from 'reactstrap'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div style={styles.root}>
                <Link to={'./'}>
                <h1 style={{color:'black', cursor:'pointer'}}>TOKO OBAT KUAT PURWADHIKA</h1>
                </Link>
                <CardHeader>
                    <Link to={'./login'}>
                        <h1 style={styles.button1}>Login</h1>
                    </Link>
                    <Link to={'./register'}>
                        <h1 style={styles.button1}>Register</h1>
                    </Link>
                </CardHeader>
            </div>

        );
    }
}

const styles = {

    root: {
        height: '10%',
        width: '100%',
        backgroundColor: '#eb4d4b',

        // padding: '1% 22%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginBottom : '10%'
    },
    button1: {
        // paddingLeft: '3%',
        fontSize: 20,
        cursor: 'pointer',
        fontColour: 'white'
    },
}

export default Navbar;
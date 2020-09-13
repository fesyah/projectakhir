import React from 'react';
import Axios from 'axios'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import {CardFooter} from 'reactstrap'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={styles.root}>
                <CardFooter style={styles.root}>
                    <h1 style={styles.copyright}>Copyright 2020 © Kevin Chandra</h1>
                </CardFooter>
            </div>
          );
    }
}

const styles = {

    root : {
        height : '100%',
        width : '100%',
        backgroundColor : '#eb4d4b',
        
        // padding : '2% 7%',
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        // marginBottom : '10%'
    },
    copyright : {
        fontSize : 15,
        color : 'white',
        fontFamily:'Roboto, sans-serif'
    },
    ul : {
        textDecoration : 'none'
    },
    li : {
        display : 'inline-block',
        color : 'white',
        marginLeft : 15,
        cursor : 'pointer'
    }

}
 
export default Footer;
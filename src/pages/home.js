import React from 'react';
import { Route } from 'react-router-dom'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible: false
         }
    }
    render() { 
        return ( 
            <div>INI HOME
            </div>
         );
    }
}
 
export default Home;
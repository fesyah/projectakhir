import React from 'react';
import { Route } from 'react-router-dom';


//import components
import Navbar from './components/navbar';
import Footer from './components/footer';

//import pages
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div> 
        <Navbar/>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Footer/>
      </div>
     );
  }
}
 
export default App;
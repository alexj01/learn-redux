import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render(){
        return (
            <div className='jumbotron'>
                <h1>learn-redux HomePage</h1>
                <p>Learning app architecture, config, and redux with react.</p>
                <Link to='about' className='btn btn-primary btn-lg/'>About</Link>
            </div>
        );
    }
}

export default HomePage;
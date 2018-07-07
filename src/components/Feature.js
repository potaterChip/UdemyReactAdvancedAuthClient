import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
    render() {
        return (
            <div>Hey this is a feature!</div>
        )
    }
}

export default requireAuth(Feature);
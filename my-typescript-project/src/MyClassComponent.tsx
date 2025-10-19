import React, {Component}  from 'react';
import Second from './Second';
import First from './First';

class MyClassComponent extends React.Component {
    render() {
        return(
            <>
            <First/>
            <Second/>
            </>
        );
    }
}

export default MyClassComponent;
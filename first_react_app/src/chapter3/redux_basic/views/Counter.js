import React,{Component} from 'react';
import PropTypes from 'prop-types';
class Counter extends Component {

    constructor(props) {
        super(props);
    }
}

Counter.propTypes = {
    caption:PropTypes.string.isRequired
}
export  default Counter;
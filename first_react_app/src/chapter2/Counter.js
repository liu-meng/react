import React, {Component} from 'react';
import PropType from 'prop-types';

const buttonStyle = {
    margin: '10px'
};

class Counter extends Component {
    constructor(props) {
        super(props);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.state = {
            count: props.initValue
    }
    }

    onClickIncrementButton(){
        this.updateCount(true);
    }

    onClickDecrementButton(){
        this.updateCount(false);
    }

    updateCount(isIncrement){
        const previosValue = this.state.count;
        const newValue = isIncrement? previosValue+1:previosValue-1;
        this.setState({count:newValue});
        this.props.onUpdate(newValue,previosValue);
    }

    componentWillMount() {
        console.log('enter commentWillMount '+this.props.caption)
    }

    componentDidMount() {
        console.log('enter commentDidMount  '+this.props.caption)
    }

    componentWillReceiveProps() {
        console.log('enter componentWillReceiveProps '+this.props.caption)
    }

    shouldComponentUpdate(nextProps,nextState) {
        return (nextProps.caption!==this.props.caption)||(nextState.count!==this.state.count);
    }
    render() {
        console.log('enter render ' + this.props.caption);
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count:{this.state.count}</span>
            </div>
        );
    }
}
Counter.propTypes = {
    caption: PropType.string.isRequired,
    initValue: PropType.number,
    onUpdate:PropType.func
};

Counter.defaultProps = {
    initValue: 0,
    onUpdate:f=>f
};
export default Counter;

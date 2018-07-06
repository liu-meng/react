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
        this.setState({count:this.state.count+1});
    }

    onClickDecrementButton(){
        this.setState({count:this.state.count-1});
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
    initValue: PropType.number
};

Counter.defaultProps = {
    initValue: 0
};
export default Counter;

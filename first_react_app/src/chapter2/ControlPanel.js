import React, {Component} from 'react';
import Counter from "./Counter";

const style = {
    margin:'20px'
};
class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.onCountUpdate = this.onCountUpdate.bind(this);
        this.initValue = [0, 10, 20];
        const initSum = this.initValue.reduce((a, b) => a + b, 0);
        this.state = {
            sum: initSum
        }
    }

    onCountUpdate(newValue, previousValue) {
        const valueChange = newValue - previousValue;
        this.setState({sum: this.state.sum + valueChange});
    }

    render() {
        console.log('enter ControlPanel render');
        return (
            <div style={style}>
                <Counter onUpdate={this.onCountUpdate} caption="First" initValue={this.initValue[0]}/>
                <Counter onUpdate={this.onCountUpdate} caption="Second" initValue={this.initValue[1]}/>
                <Counter onUpdate={this.onCountUpdate} caption="Third" initValue={this.initValue[2]}/>
                <button onClick={() => this.forceUpdate()}>Click me to repaint!</button>
                <hr/>
                <div>Total Count:{this.state.sum}</div>
            </div>

        );
    }
}


export default ControlPanel;
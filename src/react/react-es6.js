import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count : this.props.start
        }
    }

    componentDidMount() {
        console.log('mounted');
    }

    increment() {
        this.setState({
            count : this.state.count + 1
        });
    }

    render() {
        return (
            <div className="react-demo">
                <div className="counter">{this.state.count}</div>
                <button onClick={::this.increment}>+</button>
            </div>
        )
    }

}

Counter.propTypes = {
    start : React.PropTypes.number
}

ReactDOM.render(
    <Counter start={2} />,
    document.getElementById('container')
);
var React = require('react');
var ReactDOM = require('react-dom');

var Counter = React.createClass({

    getInitialState: function() {
        return {
            count: this.props.start
        };
    },

    propTypes: {
        start : React.PropTypes.number
    },

    componentDidMount: function() {
        console.log('mounted');
    },

    increment: function() {
        this.setState({
            count : this.state.count + 1
        });
    },

    render: function() {
        return (
            <div className="react-demo">
                <div className="counter">{this.state.count}</div>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }

});

ReactDOM.render(
    <Counter start={2} />,
    document.getElementById('container')
);
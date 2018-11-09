import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onAddToCounter } from '../actions';

function mapStateToProps(state) {
    return {
        counter: state.countReducer,
    };
}

const mapDispatchToProps = {
    onAddToCounter
};

class Counter extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3>{this.props.counter}</h3>
                </div>
                <div>
                    <button onClick={() => this.props.onAddToCounter(1)}>Increment ++</button>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);
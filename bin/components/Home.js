/* @flow */
import React, { Component, PropTypes } from "react";
import Radium from "radium";

@Radium
export default class Home extends Component {
    render () {
        return (
            <div style={styles.header}>
                Hello World ReactJS!
            </div>
        );
    }
}

const styles = {
    header: {
        color: "green"
    }
};

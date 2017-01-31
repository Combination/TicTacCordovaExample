import React from 'react';
export default class extends React.Component {
    render() {
        return (
            <a href="javascript:void(0)" className="close" onClick={this.props.action}>✕</a>
        );
    }
}
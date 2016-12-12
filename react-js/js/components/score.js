import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <a className="result" onClick={this.props.onReset}>
                <p>
                    <span className="me">{this.props.score.player}</span>:<span>{this.props.score.partner}</span>
                </p>
                <span className="dashed"><span>Обнулить</span></span>
            </a>
        );
    }
}
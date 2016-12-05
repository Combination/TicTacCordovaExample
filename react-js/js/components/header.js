import React from 'react';

import Title from 'reen/components/title';

class Result extends React.Component {
    render() {
        return (
            <a className="result" onClick={this.props.onResetScore}>
                <p>
                    <span className="me">{this.props.score.player}</span>:<span>{this.props.score.partner}</span>
                </p>
                <span className="dashed"><span>Обнулить</span></span>
            </a>
        );
    }
}


export default class extends React.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.score !== nextProps.score;
    }

    render() {
        return (
            <div className="header">
                <Title />
                <Result score={this.props.score} onResetScore={this.props.onResetScore} />
            </div>
        );
    }
}
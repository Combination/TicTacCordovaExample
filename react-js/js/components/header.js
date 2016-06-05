import React from 'react';

class Title extends React.Component {
    render() {
        return (
            <h2><span><b>Х</b></span><span>р</span><span>е</span><span>с</span><span>т</span><span>и</span><span>к</span><span>и</span><span>-</span><span>н</span><span><b>о</b></span><span>л</span><span>и</span><span>к</span><span>и</span></h2>
        );
    }
}


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


class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Title />
                <Result score={this.props.score} onResetScore={this.props.onResetScore} />
            </div>
        );
    }
}

export default Header;
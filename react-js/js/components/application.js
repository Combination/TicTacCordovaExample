import React from 'react';
import classNames from 'classnames';

import TicTacToe from 'tic-tac-toe/game';

import Header from 'reen/components/header';

const Choose = {
    CROSS: 'x',
    ZERO: 'o'
};

const ChooseSetting = {
    CROSS: {
        key: Choose.CROSS,
        name: 'Крестиком',
        className: Choose.CROSS,
        instance: TicTacToe.Choose.CROSS
    },
    ZERO: {
        key: Choose.ZERO,
        name: 'Ноликом',
        className: Choose.ZERO,
        instance: TicTacToe.Choose.ZERO
    }
};

const ChooseButton = React.createClass({
    render: function() {
        const className = 'btn' + ' ' + this.props.choose.className;

        return (
            <button className={className} onClick={this.props.setChoose}>Начать новую игру <br/> <b>{this.props.choose.name}</b></button>
        );
    }
});

const CloseButton = React.createClass({
    render() {
        return (
            <a href="javascript:void(0)" className="close" onClick={this.props.action}>✕</a>
        );
    }
});

const Status = React.createClass({
    propTypes: {
        message: React.PropTypes.string.isRequired,
        choose: React.PropTypes.string
    },

    getInitialState: function() {
        return {};
    },

    handleClose: function() {
        this.setState({
            display: 'none'
        });
    },

    render: function() {
        const hideStyle = {
            display: this.state.display
        };

        let className = 'status';

        if (this.props.choose) {
            className += ' ' + this.props.choose;
        }

        return (
            <p className={className} style={hideStyle}>{this.props.message}<CloseButton action={this.handleClose} /></p>
        );
    }
});

const Control = React.createClass({
    render: function() {
        let status = null;

        if (this.props.over) {
            if (this.props.over.getWinner()) {
                let message = (this.props.over.getWinner().getChoose() === this.props.choose.player) ? 'Вы выиграли!' : 'Вы проиграли!';

                status = <Status choose={this.props.choose.player.className} message={message} />
            } else {
                status = <Status message='Ничья!' />;
            }
        }

        return (
            <div className="controls">
                {status}
                <p>
                    <ChooseButton choose={ChooseSetting.CROSS} setChoose={this.props.onCrossClick} />
                    <ChooseButton choose={ChooseSetting.ZERO} setChoose={this.props.onZeroClick} />
                </p>
            </div>
        );
    }
});

class Cell extends React.Component {
    shouldComponentUpdate(props) {
        return this.props.select !== props.select || this.props.isWinnerPoint !== props.isWinnerPoint;
    }

    handleClick() {
        this.props.onClick(this.props.index);
    }

    render() {
        if (this.props.select) {
            const className = classNames(
                'btn',
                this.props.select.className,
                {'win': this.props.isWinnerPoint}
            );

            return (
                <button className={className}>{this.props.select.key}</button>
            );
        }

        return (
            <button onClick={() => this.handleClick()} className="btn"></button>
        );
    }
}

class Content extends React.Component {
    render() {
        const matrixStateList = this.props.matrix;

        let rows = [];

        const winner = this.props.over && this.props.over.getWinner();

        for (let i = 0; i < 3; ++i) {
            var cols = [];
            for (let j = 0; j < 3; ++j) {
                let index = i * 3 + j;

                let isWinnerPoint = winner && winner.getLine().indexOf(index) > -1;

                cols.push(
                    <td key={index}>
                        <Cell
                            key={index}
                            index={index}
                            select={matrixStateList[index]}
                            onClick={this.props.onClickPoint}
                            isWinnerPoint={isWinnerPoint}
                        />
                    </td>
                );
            }

            rows.push(
                <tr key={i}>{cols}</tr>
            );
        }

        const className = this.props.over ? 'mask' : '';

        return (
            <div className="content">
                <table cellSpacing="0" cellPadding="0" className={className}>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

/**
 * @type {TicTacToe.Game}
 */
let game;

function startGame(state) {
    game = new TicTacToe.Game(state.choose.player, state.choose.partner);

    state.matrix = game.getMatrix();
    state.over = null;
}

const Application = React.createClass({
    getInitialState: function() {
        let state = {
            choose: {
                player: ChooseSetting.CROSS,
                partner: ChooseSetting.ZERO
            },
            score: {
                player: 0,
                partner: 0
            }
        };

        startGame(state);

        return state;
    },

    handleSetCrossChoose: function() {
        let state = {
            choose: {
                player: ChooseSetting.CROSS,
                partner: ChooseSetting.ZERO
            }
        };

        startGame(state);

        this.setState(state);
    },

    handleSetZeroChoose: function() {
        let state = {
            choose: {
                player: ChooseSetting.ZERO,
                partner: ChooseSetting.CROSS
            }
        };

        startGame(state);

        this.setState(state);
    },

    setMatrixPoint: function(index) {
        game.setPoint(index);

        const over = game.getOver();

        let score = this.state.score;

        if (over && over.getWinner()) {
            let winner = over.getWinner();

            if (winner.getChoose() === game.player) {
                score = {
                    player: this.state.score.player + 1,
                    partner: this.state.score.partner
                };
            } else {
                score = {
                    player: this.state.score.player,
                    partner: this.state.score.partner + 1
                };
            }
        }

        this.setState({
            matrix: game.getMatrix(),
            over: over,
            score: score
        });
    },

    handleResetScore: function() {
        this.setState({
            score: {
                player: 0,
                partner: 0
            }
        })
    },

    render: function() {
        return (
            <div className="app">
                <Header onResetScore={this.handleResetScore} score={this.state.score} />
                <Control
                    over={this.state.over}
                    choose={this.state.choose}
                    onCrossClick={this.handleSetCrossChoose}
                    onZeroClick={this.handleSetZeroChoose}
                />
                <Content
                    over={this.state.over}
                    onClickPoint={this.setMatrixPoint}
                    matrix={this.state.matrix}
                />
            </div>
        );
    }
});

export default Application

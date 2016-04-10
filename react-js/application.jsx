const Choose = {
    CROSS: 'x',
    ZERO: 'o'
};

const ChooseSetting = {
    CROSS: {
        key: Choose.CROSS,
        name: 'Крестиком',
        className: Choose.CROSS
    },
    ZERO: {
        key: Choose.ZERO,
        name: 'Ноликом',
        className: Choose.ZERO
    }
};

const Result = React.createClass({
    propTypes: {
        player: React.PropTypes.number.isRequired,
        partner: React.PropTypes.number.isRequired
    },

    componentWillMount: function() {
        this.setState({
            player: this.props.player,
            partner: this.props.partner
        });
    },

    handleReset: function() {
        this.setState({
            player: 0,
            partner: 0
        });
    },

    render: function () {
        return (
            <a className="result" onClick={this.handleReset}>
                <p>
                    <span className="me">{this.state.player}</span>:<span>{this.state.partner}</span>
                </p>
                <span className="dashed"><span>Обнулить</span></span>
            </a>
        );
    }
});

const Title = React.createClass({
    render: function() {
        return (
            <h2><span><b>Х</b></span><span>р</span><span>е</span><span>с</span><span>т</span><span>и</span><span>к</span><span>и</span><span>-</span><span>н</span><span><b>о</b></span><span>л</span><span>и</span><span>к</span><span>и</span></h2>
        );
    }
});

const Header = React.createClass({
    render: function () {
        return (
            <div className="header">
                <Title />
                <Result player={1} partner={1} />
            </div>
        );
    }
});

const ChooseButton = React.createClass({
    render: function() {
        let className = 'btn' + ' ' + this.props.choose.className;

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
        return {
            display: 'none'
        };
    },

    handleClose: function() {
        this.setState({
            display: 'none'
        });
    },

    render: function() {
        var hideStyle = {
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
        return (
            <div className="controls">
                <Status choose={ChooseSetting.ZERO.className} message='Вы выиграли!' />
                <Status choose={ChooseSetting.CROSS.className} message='Вы проиграли!' />
                <Status message='Ничья!' />
                <p>
                    <ChooseButton choose={ChooseSetting.CROSS} setChoose={this.props.onCrossClick} />
                    <ChooseButton choose={ChooseSetting.ZERO} setChoose={this.props.onZeroClick} />
                </p>
            </div>
        );
    }
});

const Cell = React.createClass({
    componentWillReceiveProps: function() {
        this.setState(this.getInitialState);
    },

    getDefaultProps: function() {
        return {
            select: null
        };
    },

    getInitialState: function () {
        return {
            choose: this.props.select
        };
    },

    handleClick: function () {
        this.props.onClick(this.props.index, this.props.choose);
    },

    render: function() {
        if (this.state.choose === null) {
            return (
                <button onClick={this.handleClick} className="btn"></button>
            );
        }

        let className = 'btn' + ' ' + this.state.choose.className;

        return (
            <button className={className}>{this.state.choose.key}</button>
        );
    }
});

const Content = React.createClass({
    componentWillReceiveProps: function() {
        this.setState(this.getInitialState());
    },

    getInitialState: function () {
        return {};
    },

    render: function() {
        let matrixStateList = this.props.matrix;

        let rows = [];

        for (let i = 0; i < 3; ++i) {
            var cols = [];
            for (let j = 0; j < 3; ++j) {
                let index = i * 3 + j;
                cols.push(
                    <td key={index}>
                        <Cell
                            key={index}
                            select={matrixStateList[index]}
                            choose={this.props.choose.player}
                            onClick={this.props.onClickPoint}
                        />
                    </td>
                );
            }

            rows.push(
                <tr key={i}>{cols}</tr>
            );
        }

        return (
            <div className="content">
                <table cellSpacing="0" cellPadding="0">
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
});

const Application = React.createClass({
    getInitialState: function() {
        return {
            choose: {
                player: ChooseSetting.CROSS,
                partner: ChooseSetting.ZERO
            },
            matrix: {

            }
        };
    },

    handleSetCrossChoose: function() {
        this.setState({
            choose: {
                player: ChooseSetting.CROSS,
                partner: ChooseSetting.ZERO
            },
            matrix: {

            }
        });
    },

    handleSetZeroChoose: function() {
        this.setState({
            choose: {
                player: ChooseSetting.ZERO,
                partner: ChooseSetting.CROSS
            },
            matrix: {

            }
        });
    },

    /**
     * TODO: WARNING wait for one point
     * @param index
     * @param choose
     */
    setMatrixPoint: function(index, choose) {
        this.state.matrix[index] = choose;
        this.setState({
            matrix: this.state.matrix
        });
    },

    render: function() {
        return (
            <div className="app">
                <Header />
                <Control
                    onCrossClick={this.handleSetCrossChoose}
                    onZeroClick={this.handleSetZeroChoose}
                />
                <Content
                    choose={this.state.choose}
                    onClickPoint={this.setMatrixPoint}
                    matrix={this.state.matrix}
                />
            </div>
        );
    }
});

ReactDOM.render(
    <Application />,
    document.getElementById('js-app')
);
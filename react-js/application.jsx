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
    render: function () {
        return (
            <a className="result">
                <p>
                    <span className="me">{this.props.player}</span>:<span>{this.props.partner}</span>
                </p>
                <span className="dashed"><span>Обнулить</span></span>
            </a>
        );
    }
});

const Header = React.createClass({
    render: function () {
        return (
            <div className="header">
                <h2><span><b>Х</b></span><span>р</span><span>е</span><span>с</span><span>т</span><span>и</span><span>к</span><span>и</span><span>-</span><span>н</span><span><b>о</b></span><span>л</span><span>и</span><span>к</span><span>и</span></h2>
                <Result player={1} partner={1} />
            </div>
        );
    }
});

const ChooseButton = React.createClass({
    render: function() {
        var className = 'btn' + ' ' + this.props.choose.className;

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

        var className = 'status';

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
                <Status choose={'o'} message={'Вы выиграли!'} />
                <Status choose={'x'} message={'Вы проиграли!'} />
                <Status message={'Ничья!'} />
                <p>
                    <ChooseButton choose={ChooseSetting.CROSS} setChoose={this.props.onCrossClick} />
                    <ChooseButton choose={ChooseSetting.ZERO} setChoose={this.props.onZeroClick} />
                </p>
            </div>
        );
    }
});

const Cell = React.createClass({
    getInitialState: function () {
        return {
            choose: null
        };
    },

    handleClick: function () {
        this.setState({
            choose: this.props.choose.player
        });
    },

    render: function() {
        if (this.state.choose === null) {
            return (
                <button onClick={this.handleClick} className="btn"></button>
            );
        }

        var className = 'btn' + ' ' + this.state.choose.className;

        return (
            <button className={className}>{this.state.choose.key}</button>
        );
    }
});

const Content = React.createClass({
    render: function() {
        var row = (
            <tr>
                <td><Cell choose={this.props.choose} /></td>
                <td><Cell choose={this.props.choose} /></td>
                <td><Cell choose={this.props.choose} /></td>
            </tr>
        );

        return (
            <div className="content">
                <table cellSpacing="0" cellPadding="0">
                    <tbody>
                        {row}
                        {row}
                        {row}
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
            }
        };
    },

    handleSetCrossChoose: function() {
        this.setState({
            choose: {
                player: ChooseSetting.CROSS,
                partner: ChooseSetting.ZERO
            }
        });
    },

    handleSetZeroChoose: function() {
        this.setState({
            choose: {
                player: ChooseSetting.ZERO,
                partner: ChooseSetting.CROSS
            }
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
                <Content choose={this.state.choose} />
            </div>
        );
    }
});

ReactDOM.render(
    <Application />,
    document.getElementById('js-app')
);
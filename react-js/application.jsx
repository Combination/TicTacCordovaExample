var Choose = {
    CROSS: 'x',
    ZERO: 'o'
};

var ChooseSetting = {
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

var Result = React.createClass({
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

var Header = React.createClass({
    render: function () {
        return (
            <div className="header">
                <h2><span><b>Х</b></span><span>р</span><span>е</span><span>с</span><span>т</span><span>и</span><span>к</span><span>и</span><span>-</span><span>н</span><span><b>о</b></span><span>л</span><span>и</span><span>к</span><span>и</span></h2>
                <Result player={1} partner={1} />
            </div>
        );
    }
});

var ButtonChoose = React.createClass({
    render: function() {
        var className = 'btn' + ' ' + this.props.choose.className;

        return (
            <button className={className}>Начать новую игру <br/> <b>{this.props.choose.name}</b></button>
        );
    }
});

var Control = React.createClass({
    render: function() {
        var hideStyle = {
            display:'none'
        };

        return (
            <div className="controls">
                <p className="status o" style={hideStyle}>Вы выиграли <a href="javascript:void(0)" className="close">✕</a></p>
                <p className="status x" style={hideStyle}>Вы проиграли!<a href="javascript:void(0)" className="close">✕</a></p>
                <p className="status" style={hideStyle}>Ничья!<a href="javascript:void(0)" className="close">✕</a></p>
                <p>
                    <ButtonChoose choose={ChooseSetting.CROSS} onClick={this.props.onCrossClick} />
                    <ButtonChoose choose={ChooseSetting.ZERO} onClick={this.props.onZeroClick} />
                </p>
            </div>
        );
    }
});

var Cell = React.createClass({
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

var Content = React.createClass({
    render: function() {
        return (
            <div className="content">
                <table cellSpacing="0" cellPadding="0">
                    <tbody>
                        <tr>
                            <td><Cell choose={this.props.choose} /></td>
                            <td><Cell choose={this.props.choose} /></td>
                            <td><Cell choose={this.props.choose} /></td>
                        </tr>
                        <tr>
                            <td><Cell choose={this.props.choose} /></td>
                            <td><Cell choose={this.props.choose} /></td>
                            <td><Cell choose={this.props.choose} /></td>
                        </tr>
                        <tr>
                            <td><Cell choose={this.props.choose} /></td>
                            <td><Cell choose={this.props.choose} /></td>
                            <td><Cell choose={this.props.choose} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
});

var Application = React.createClass({
    getInitialState: function() {
        return {
            choose: {
                player: ChooseSetting.CROSS,
                partner: ChooseSetting.ZERO
            }
        };
    },

    setCrossChoose: function() {
        this.setState({
            choose: {
                player: ChooseSetting.CROSS,
                partner: ChooseSetting.ZERO
            }
        });
    },

    setZeroChoose: function() {
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
                    onCrossClick={this.setCrossChoose}
                    onZeroClick={this.setZeroChoose}
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
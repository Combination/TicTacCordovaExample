var Choose = {
    CROSS: 'x',
    ZERO: 'o'
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
        var className = 'btn' + ' ' + this.props.choose;

        return (
            <button className={className}>Начать новую игру <br/> <b>{this.props.name}</b></button>
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
                    <ButtonChoose choose={Choose.CROSS} name={'Крестиком'} />
                    <ButtonChoose choose={Choose.ZERO} name={'Ноликом'} />
                </p>
            </div>
        );
    }
});

var Cell = React.createClass({
    render: function() {
        var className = 'btn' + ' ' + this.props.choose;

        return (
            <button className={className}>{this.props.name}</button>
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
                            <td><Cell /></td>
                            <td><Cell /></td>
                            <td><Cell /></td>
                        </tr>
                        <tr>
                            <td><Cell choose={Choose.CROSS} name={'✕'}/></td>
                            <td><Cell choose={Choose.ZERO} name={'o'}/></td>
                            <td><Cell /></td>
                        </tr>
                        <tr>
                            <td><Cell /></td>
                            <td><Cell /></td>
                            <td><Cell /></td>
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
            choose: Choose.CROSS
        };
    },

    setCrossChoose: function() {
        this.setState({
            choose: Choose.CROSS
        });
    },

    setZeroChoose: function() {
        this.setState({
            choose: Choose.ZERO
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
                <Content />
            </div>
        );
    }
});

ReactDOM.render(
    <Application />,
    document.getElementById('js-app')
);
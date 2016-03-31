        var Header = React.createClass({
            render: function () {
                return (
                    <div className="header">
                        <h2><span><b>Х</b></span><span>р</span><span>е</span><span>с</span><span>т</span><span>и</span><span>к</span><span>и</span><span>-</span><span>н</span><span><b>о</b></span><span>л</span><span>и</span><span>к</span><span>и</span></h2>
                    </div>
                );
            }
        });

        var Button = React.createClass({
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
                            <Button choose={'x'} name={'Крестиком'} />
                            <Button choose={'o'} name={'Ноликом'} />
                        </p>
                    </div>
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
                                    <td><button className="btn"></button></td>
                                    <td><button className="btn"></button></td>
                                    <td><button className="btn"></button></td>
                                </tr>

                                <tr>
                                    <td><button className="btn x">✕</button></td>
                                    <td><button className="btn o">o</button></td>
                                    <td><button className="btn"></button></td>
                                </tr>
                                <tr>
                                    <td><button className="btn"></button></td>
                                    <td><button className="btn"></button></td>
                                    <td><button className="btn"></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            }
        });

        var Application = React.createClass({
            render: function() {
                return (
                    <div className="app">
                        <Header />
                        <Control />
                        <Content />
                    </div>
                );
            }
        });

        ReactDOM.render(
            <Application />,
            document.getElementById('js-app')
        );
        var Header = React.createClass({
            render: function () {
                return (
                    <div className="header">
                        <h2><span><b>Х</b></span><span>р</span><span>е</span><span>с</span><span>т</span><span>и</span><span>к</span><span>и</span><span>-</span><span>н</span><span><b>о</b></span><span>л</span><span>и</span><span>к</span><span>и</span></h2>
                    </div>
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
                            <button className="btn x">Начать новую игру <br/> <b>Крестиком</b></button>
                            <button className="btn o">Начать новую игру <br/> <b>Ноликом</b></button>
                        </p>
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
                    </div>
                );
            }
        });

        ReactDOM.render(
            <Application />,
            document.getElementById('js-app')
        );
import React from 'react';

import Title from 'reen/components/title';
import Score from 'reen/components/score';

export default class extends React.Component {
    render() {
        return (
            <div className="header">
                <Title />
                <Score score={this.props.score} onReset={this.props.onResetScore} />
            </div>
        );
    }
}
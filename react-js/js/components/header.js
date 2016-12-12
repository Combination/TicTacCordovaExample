import React from 'react';

import Title from 'reen/components/title';
import Score from 'reen/components/score';

export default class extends React.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.score !== nextProps.score;
    }

    render() {
        return (
            <div className="header">
                <Title />
                <Score score={this.props.score} onReset={this.props.onResetScore} />
            </div>
        );
    }
}
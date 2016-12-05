import React from 'react';
export default class extends React.Component {
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return (
            <h2><span><b>Х</b></span><span>р</span><span>е</span><span>с</span><span>т</span><span>и</span><span>к</span><span>и</span><span>-</span><span>н</span><span><b>о</b></span><span>л</span><span>и</span><span>к</span><span>и</span></h2>
        );
    }
}
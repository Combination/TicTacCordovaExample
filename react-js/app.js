import React from 'react';
import ReactDom from 'react-dom';
import Application from 'reen/components/application';
import GameFactory from 'tic-tac-toe/game.factory';
import Behavior from 'tic-tac-toe/behavior/advance';

/**
 * For browser performance
    import Perf from 'react-addons-perf';
    import { whyDidYouUpdate } from 'why-did-you-update'

    whyDidYouUpdate(React);
    global.Perf = Perf;
 */

ReactDom.render(
    <Application gameFactory={new GameFactory(Behavior)} />,
    document.getElementById('js-app')
);
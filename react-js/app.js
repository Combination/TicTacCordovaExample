import React from 'react';
import { render } from 'react-dom';
import Application from 'reen/components/application';

/**
 * For browser performance
    import Perf from 'react-addons-perf';
    import { whyDidYouUpdate } from 'why-did-you-update'

    whyDidYouUpdate(React);
    global.Perf = Perf;
 */

render(
    <Application />,
    document.getElementById('js-app')
);
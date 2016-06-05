import React from 'react';
import { render } from 'react-dom';
import Application from 'reen/components/application';

/**
    import Perf from 'react-addons-perf';

    global.Perf = Perf;
 */

render(
    <Application />,
    document.getElementById('js-app')
);
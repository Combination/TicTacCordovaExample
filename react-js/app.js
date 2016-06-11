import React from 'react';
import { render } from 'react-dom';
import Application from 'reen/components/application';

import Perf from 'react-addons-perf';
import { whyDidYouUpdate } from 'why-did-you-update'


if (process.env.NODE_ENV !== 'production') {
    whyDidYouUpdate(React);
    global.Perf = Perf;
}

render(
    <Application />,
    document.getElementById('js-app')
);
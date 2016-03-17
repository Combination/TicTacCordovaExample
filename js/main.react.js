define([
    'react',
    'react-dom',
    'application'
], function (React, ReactDOM, Application) {
    ReactDOM.render(
        React.createElement(Application),
        document.getElementById('js-app')
    );
});
require.config({

    paths: {
        "react": "../vendor/react",
        "react-dom": "../vendor/react-dom",
        "application": "react/application.react"
    },

    shim: {
        "application": {
            exports: "Application"
        }
    },

    // запустить приложение
    deps: ['./main.react']
});
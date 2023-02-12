const App = (props) => {

    // check if props is an object and has a property named "data"
    // if so, then use the data property to render the list
    // otherwise, render a p with the text "No data"
    if (props && props.data) {
        return `
        <html>
            <head>
                <title>My App</title>
            </head>
            <body>
                <ul>
                    ${props.data.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </body>
        </html>
        `;
    } else {
        return `
        <html>
            <head>
                <title>My App</title>
            </head>
            <body>
                <p>No data</p>
            </body>
        </html>
        `;
    }
};

module.exports = {
    entryPoint: App
};

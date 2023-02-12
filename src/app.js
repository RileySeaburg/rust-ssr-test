const App = (props) => {
    console.log('App', props);

    // check if props is an object and has a property named "data"
    // if so, then use the data property to render the list
    // otherwise, render a p with the text "No data"

        return `
        <html>
            <head>
                <title>My App</title>
            </head>
            <body>
               <div id="root"></div>
            </body>
            <script>
                window.__INITIAL_PROPS__ = ${props};
                console.log('window.__INITIAL_PROPS__', window.__INITIAL_PROPS__);
                // replace the root div with a  list of the props
                // check if props is an object and has a property named "params"
                // if so, then use the params property to render the list
                // otherwise, render a p with the text "No data"
                if (window.__INITIAL_PROPS__ && window.__INITIAL_PROPS__.params) {
                    const root = document.getElementById('root');
                    const ul = document.createElement('ul');
                    window.__INITIAL_PROPS__.params.forEach((param) => {
                        const li = document.createElement('li');
                        li.innerText = param;
                        ul.appendChild(li);
                    });
                    root.appendChild(ul);
                } else {
                    const root = document.getElementById('root');
                    const p = document.createElement('p');
                    p.innerText = 'No data';
                    root.appendChild(p);
                }

            </script>
        </html>
        `;
};

module.exports = {
    entryPoint: App
};

# Rust SSR Test
## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

This is a test project to see if I can get a Rust server side rendered app working with a React front end. This version uses vanilla JS to render html on the server. It is also using webpack to bundle the js. Properties from the server are being delivered directly into the javascript using the V8 engine. 

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. This is not a production ready project.

### Prerequisites

Rust - Install from [here](https://www.rust-lang.org/tools/install)

Node.js - Install from [here](https://nodejs.org/en/download/)

Yarn - Install from [here](https://classic.yarnpkg.com/en/docs/install/#windows-stable)


### Installing

Clone the repo

```sh
git clone https://github.com/RileySeaburg/rust-ssr-test

```

Install the dependencies

```sh
cd rust-ssr-test
yarn
```
Bundle the js

```sh
yarn build
```

Run the project

```sh
cargo run
```
## Usage <a name = "usage"></a>

You will see that a list of items is rendered on the page. This is being done on the server. 

The list of items is being passed from the server to the JavaScript that server renders. 

The JavaScript generates HTML, with an empty div, it also includes a script tag which attaches the data from the server to the window object.
The HTML is then sent to the client, from there, the client renders the HTML and the JavaScript is executed. 
The JavaScript then attaches the data to the window object HTML is then rendered on the client.

This is a very basic example of how server side rendering can be done with Rust and is used for testing purposes only.
[![NPM Downloads](https://img.shields.io/npm/dm/readtastic.svg?style=round-square)](https://npm-stat.com/charts.html?package=readtastic)
[![NPM Version](http://img.shields.io/npm/v/readtastic.svg?style=flat)](https://npmjs.com/package/readtastic)
[![install size](https://packagephobia.com/badge?p=readtastic)](https://packagephobia.com/result?p=readtastic)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/readtastic?style=round-square)](https://bundlephobia.com/package/readtastic@latest)
[![Gitpod Ready-to-code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod&style=round-square)](https://gitpod.io/#https://github.com/blazeinferno64/readtastic.js)

# readtastic

readtastic is a fast, minimalistic, lightweight, promise-based tool for interacting with input streams line by line.

# Installation

To get started with `readtastic`, simply run the following command in your terminal:

```bash
$ npm i readtastic
```

# Getting started

First, require this library to your project as follows:

```js
const readtastic = require("readtastic");
```

If it's an ES Module then import it to your project as follows:

```js
import readtastic from "readtastic";
```

# Note

New to Promises?

If you're not familiar with promises, check out the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to learn more.

## Built on Top of Node.js readline library

Under the hood, `readtastic` leverages the built-in [readline library](https://nodejs.org/api/readline.html) in Node.js, ensuring a seamless and efficient experience.

# Api usage

Once you've imported `readtastic` into your project, you're ready to start working using `readtastic`!

Below is a simple example demonstrating the usage:

```javascript

try {
    // Creates a new interface
    // It's similar to the Node's built-in readline module
    readtastic.parse_interface({
        input: process.stdin,
        output: process.stdout
    });

    // Prompt the user
    // Use await since it's an async function
    const phrase = await readtastic.prompt("What do you think of readtastic?\n");

    // Log out the a answer of the prompt.
    // In this case it's 'phrase'.
    console.log(`You said: ${phrase}`);

    // Simple thank you note at last.
    console.log(`Thank you for your valuable feedback!`);
} catch (error) {
    // Handling the error.
    console.error(error);
}
```

# LICENSE

`readtastic` is released under the MIT License.

View the full license terms <a href="https://github.com/BlazeInferno64/readtastic.js/blob/main/LICENSE">here</a>.

# Bugs & Issues

Found a bug or want a new feature?

Report issues and request features on the [readtastic issue tracker](https://github.com/blazeinferno64/readtastic.js/issues).

`Thanks for reading!`

`Have a great day ahead :D`
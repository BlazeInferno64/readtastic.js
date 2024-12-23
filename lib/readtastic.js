// Copyright (c) 2024 BlazeInferno64 --> https://github.com/blazeinferno64.
//
// Author(s) -> BlazeInferno64
//
// Last updated: 23/12/2024

"use strict";

const readline = require("readline");
const process = require("process");

const { EventEmitter } = require("events");
const emitter = new EventEmitter();
const packageJson = require("../package.json");

let rl;

/**
 * Creates a new interface for reading of input stream line by line.
 * 
 * @param {*} interfaceObject - The interface object containing the input, output respectively.
 */
const parseInterface = (interfaceObject) => {
    const input = interfaceObject.input;
    const output = interfaceObject.output;
    if (!rl) {
        rl = readline.createInterface({
            input: input || process.stdin,
            output: output || process.stdout
        });
    }
}

const evaluatePrompt = (question) => {
    return new Promise((resolve) => {
        if (!rl) {
            rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
        }
        rl.question(question, (answer) => {
            try {
                const parsedAnswer = JSON.parse(answer);
                resolve(parsedAnswer);
            } catch (error) {
                resolve(answer);
            } finally {
                rl.close(); // Close the interface here, after resolving the promise
            }
        });
    });
}

const resume = () => {
    if (rl) {
        rl.resume();
    }
}

const pause = () => {
    if (rl) {
        rl.pause();
    }
}

const close = () => {
    if (rl) {
        rl.close();
        rl = null; // Reset rl to null after closing
    }
}

const on = (event, listener) => {
    if (rl) {
        rl.on(event, listener); // Use the readline interface to listen for events
    } else {
        emitter.on(event, listener); // Fallback to the EventEmitter if rl is not initialized
    }
}

const VERSION = () => {
    if (!packageJson) throw new Error(`'package.json' files seems to be missing!\nPlease try again by downloading 'readtastic' again with the following command\n''npm i readtastic''\nin your terminal!`);
    return packageJson.version;
}

/**
 * @returns {Object} Returns a object which contains some info regarding readtastic.
 */

const ABOUT = () => {
    if (!packageJson) throw new Error(`'package.json' files seems to be missing!\nPlease try again by downloading 'readtastic' again with the following command\n''npm i readtastic''\nin your terminal!`);
    const aboutObject = {
        "Name": packageJson.name,
        "Author": packageJson.author,
        "Version": packageJson.version,
        "Description": packageJson.description,
        "Respository": packageJson.repository
    };
    return aboutObject;
};

module.exports = {
    /**
    * Creates a new interface for reading of input stream line by line.
    * 
    * @param {*} interfaceObject - The interface object containing the input, output respectively (eg. process.stdin, process.stdout).
    */
    parse_interface: (interfaceObject) => parseInterface(interfaceObject),
    /**
     * Prompts a specified question.
     * 
     * @param {any} question - The specified question.
     * @returns {any} - The answer of the prompted question.
     */
    prompt: (question) => evaluatePrompt(question),
    /**
     * Resume the interface.
     */
    resume: () => resume(),
    /**
     * Pause the interface.
     */
    pause: () => pause(),
    /**
     * Close the interface.
     */
    close: () => close(),
    /**
     * Returns the package version.
     */
    VERSION,
    ABOUT,
    on: (event, listener) => on(event, listener)
}
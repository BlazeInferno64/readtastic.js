// Copyright (c) 2024 BlazeInferno64 --> https://github.com/blazeinferno64.
//
// Author(s) -> BlazeInferno64
//
// Last updated: 23/12/2024

// Type definitions for 'readtastic'

import { Interface as ReadlineInterface } from 'readline';

interface interfaceObject {
    /**
     * The input stream (eg. process.stdin).
     */
    input?: any;
    /**
     * The output stream (eg. process.stdout).
     */
    output?: any;
}

interface AboutObject {
    /**
     * Name of the package.
     */
    Name: string;
    /**
     * Name of the author.
     */
    Author: string;
    /**
     * Version of the package.
     */
    Version: string;
    /**
     * Description of the package.
     */
    Description: string;
    /**
     * Repository of the package.
     */
    Respository: string;
}

interface Readtastic {
    /**
     * Creates a new interface for reading input streams line by line.
     * 
     * This method initializes a readline interface using the provided input and output streams.
     * It allows for interactive line-by-line input processing.
     * 
     * @param {interfaceObject} interfaceObj - An object containing the input and output streams.
     * @param {any} interfaceObj.input - The input stream (e.g., `process.stdin`).
     * @param {any} interfaceObj.output - The output stream (e.g., `process.stdout`).
     * 
     * @example 
     * // Creates a new interface with process.stdin and process.stdout
     * readtastic.parse_interface({
     *     input: process.stdin,
     *     output: process.stdout
     * });
     */
    parse_interface(interfaceObj: interfaceObject): void;

    /**
     * Provides a simplified promise-based interface for prompting questions.
     * 
     * This method prompts the user with a question and returns their response.
     * The response is parsed as JSON if possible; otherwise, it returns the raw string input.
     * 
     * @param {string} question - The question to prompt the user with.
     * @returns {Promise<string | object>} A promise that resolves to the user's response,
     * either as a string or an object if the input was valid JSON.
     * 
     * @example 
     * // Prompt example.
     * const phrase = await readtastic.prompt("What do you think of readtastic? ");
     * console.log(`You said: ${phrase}`); // Logging the answer of the prompt.
     * console.log("Thanks for your valuable feedback!");
     */
    prompt(question: string): Promise<string | object>;

    /**
     * Closes the readline interface, if it is currently open.
     * 
     * This method terminates the input stream and releases any resources associated with the interface.
     * After calling this method, the interface cannot be used to read input until it is reinitialized.
     * 
     * @example
     * // Close the readline interface.
     * readtastic.close();
     * 
     * @remarks
     * It is important to call this method when you are done with input processing to ensure that
     * resources are properly released and to avoid memory leaks.
     */
    close(): void;

    /**
     * Resumes the readline interface if it has been paused.
     * 
     * This method allows the interface to continue processing input after it has been paused.
     * It is useful for resuming input collection after temporarily halting it.
     * 
     * @example 
     * // Resume the readline interface.
     * readtastic.resume();
     * 
     * @remarks
     * Ensure that the interface is paused before calling this method; otherwise, it will have no effect.
     */
    resume(): void;

    /**
     * Pauses the readline interface, temporarily halting input processing.
     * 
     * This method stops the interface from reading new input, allowing you to control when
     * input collection occurs. It can be useful in scenarios where you need to process
     * existing input before accepting more.
     * 
     * @example
     * // Pause the readline interface.
     * readtastic.pause();
     * 
     * @remarks
     * To resume input processing after pausing, call the `resume` method.
     */
    pause(): void;

    /**
     * Returns the package version number.
     * @example
     * // Simple example.
     * console.log(readtastic.VERSION());
     */
    VERSION(): string;

    /**
     * @returns {AboutObject<Object>} Returns a object which contains some info regarding readtastic.
     * @example 
     * console.log(readtastic.about()); 
     * // Logging the about object to the console.
    */
    ABOUT(): AboutObject;

    /**
     * Adds a listener for the specified event.
     * @param event - The name of the event to listen for.
     * @param listener - The listener function to call when the event occurs.
     * @example
     * // on() example.
     * readtastic.on('line', (input) => {
     *     console.log(`Received line: ${input}`);
     * });
     */
    on<K extends keyof ReadlineInterface>(event: K, listener: ReadlineInterface[K]): void;
}

/**
 * Readtastic is a fast, minimalistic, lightweight, promise-based tool for interacting with input streams line by line.
 * 
 * It simplifies the process of reading user input, making it easy to create interactive command-line applications.
 * 
 * Learn more about it from [here](https://github.com/blazeinferno64/readtastic.js).
 * 
 * @example
 * // Require it in your project using CommonJS syntax:
 * const readtastic = require("readtastic");
 * 
 * // Or import it into your project if you're using ES modules:
 * import readtastic from "readtastic";
 */

declare const readtastic: Readtastic;
export = readtastic;
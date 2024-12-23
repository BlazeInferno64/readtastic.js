// Copyright (c) 2024 BlazeInferno64 --> https://github.com/blazeinferno64.
//
// Author(s) -> BlazeInferno64
//
// Last updated: 23/12/2024

// Note:- This is just a simple test file for 'blazed.js'
//        You can run this file by doing 'npm test' in your terminal

// Requiring the necessary libraries
const readtastic = require("../index");
const process = require("process");
const { describe, test, expect } = require("@jest/globals");

describe('Readtastic prompt function', () => {
    test("Prompts the user", async () => {
        const phrase = await readtastic.prompt("What's up?\n");
        expect(phrase).toBeTruthy();
    });
    test("Creates and parses a new 'readtastic' interface", async () => {
        const readtastic_interface = readtastic.parse_interface({
            input: process.stdin,
            output: process.stdout
        })
        expect(readtastic_interface).toBeUndefined();
    })
});
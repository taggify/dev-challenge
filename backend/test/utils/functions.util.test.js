/**
 * Global auxiliary functions test.
 *
 * All test for global functions to be used in the project must be declared here.
 *
 * @file Auxiliary functions.
 * @author Alejandro Amaral <aamaral@taggify.net>
 * @since 1.0.0
*/

const utils = require("../../src/utils/functions");


describe('Auxiliary functions test', () => {
    // Add tests here
    describe('helloBack', () => {
        it('Should return a greeting message', () => {
            expect(utils.helloBack('world')).toStrictEqual({ message: 'Hello world' });
        });

        it('Should return an empty response', () => {
            expect(utils.helloBack()).toStrictEqual({});
        });
    })
})


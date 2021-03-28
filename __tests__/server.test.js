'use strict';

const { it, expect } = require('@jest/globals');
const superTest = require('supertest');
const { describe } = require('yargs');
const server = require('../server.js');
const request = superTest(server.app);

describe('server',()=>{
    it('handle invalid routs',async()=>{
        const response = await request.get('/foo');
        expect(response.status).toEqual(404);
    });
    it('handle server error',async()=>{
        const response = await request.get('/bad');
        expect(response.status).toEqual(500);
    });
    it('handle working routes',async()=>{
        const response = await request.get('/');
        expect(response.text).toEqual('Hello There');
    });
});

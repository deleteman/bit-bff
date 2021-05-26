import * as http from 'http';
import {ServiceResponseType, PersonType} from '@deleteman/bff.bff-types';

let data: ServiceResponseType = [
    {
        name: "Fernando Doglio",
        age: 23,
        address: "Madrid, Spain"
    },
    {
        name: "Second Person",
        age: 99,
        address: "Somewhere else"
    }
]


export function newServer() {
    http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Max-Age', 2592000); // 30 days

    res.end(JSON.stringify(data));
    }).listen(8000);
}

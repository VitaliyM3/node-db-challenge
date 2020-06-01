const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
    getResources,
    getProjects,
    getTasks
}

function getResources() {

}

function getProjects() {
    
}

function getTasks() {
    
}



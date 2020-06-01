const knex = require('knex');
const config = require('./knexfile.js');
const db = knex(config.development);

module.exports = {
    getResources,
    addResource,
    getProjects,
    addProject,
    getTasks,
    addTask
}

function getResources() {
    return db('resources');
}

function addResource(data) {
    return db('resources')
    .insert(data);
}

function getProjects() {
    return db('projects');
}

function addProject(data) {
    return db('projects')
    .insert(data);
}

// function getTasks(id) {
//     return db('projects')
//     .where('projects.id', 'tasks.project_id')
//     .join('tasks', { 'projects.id': 'tasks.project_id' });
// }

function getTasks(id) {
    return db('tasks')
    .join('projects', 'tasks.project_id', 'project_id')
    .select('projects.project_name', 'projects.description', 'tasks.description', 'tasks.notes', 'tasks.completed')
    .orderBy('tasks.id')
    .where('tasks.project_id', id);
}

function addTask(data) {
    return db('tasks')
    .insert(data);
}



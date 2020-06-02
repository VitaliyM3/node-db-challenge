const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

//get list of resources
router.get('/resources', (req, res) => {
    Projects.getResources()
    .then(resources => {
        res.json(resources);
    
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get resources' });
      });
})

//get list of projects
router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get projects' });
      });
})

//get list of all tasks
router.get('/tasks/:id', (req, res) => {
    const { id } = req.params;
    Projects.getTasks(id)
    .then(tasks => {
        if (tasks) {
            res.json(tasks);
        } else {
            res.status(404).json({ message: 'Could not find the tasks with the given id.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get the tasks' });
      });
})

//add resource
router.post('/resources', (req, res) => {
    const body = req.body;
    if(body.resource_name) {
        Projects.addResource(body)
            .then(data => {
                res.status(201).json(data);
            })
            .catch(err => {
                res.status(500).json({  message: 'Failed to add resource'})
            });
    } else {
        res.status(400).json({ error: 'the post must have a resource name' })
    };
})

//add project
router.post('/projects', (req, res) => {
    const body = req.body;
    if(body.project_name) {
        Projects.addProject(body)
            .then(data => {
                res.status(201).json(data);
            })
            .catch(err => {
                res.status(500).json({  message: 'Failed to add Project'})
            });
    } else {
        res.status(400).json({ error: 'the post must have a Project Name' })
    };
})

//add task
router.post('/projects/tasks', (req, res) => {
    const body = req.body;
    if(body.project_id && body.description) {
        Projects.addTask(body)
            .then(task => {
                res.status(201).json(task);
            })
            .catch(err => {
                res.status(500).json({  message: 'Failed to add task'})
            });
    } else {
        res.status(400).json({ error: 'you need to have a project id and description'})
    }
})

module.exports = router;
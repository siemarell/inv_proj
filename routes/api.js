var express = require('express');
var router = express.Router();
var db = require('../db/db');

router.get('/projects', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.json(db.getProjects());
});

router.get('/projects/types',function (req, res, next) {
   res.json(db.getTypes());
});

router.get('/projects/types/:type',function (req, res, next) {
    res.json(db.getProjectsByType(req.params["type"]));
});

router.get('/projects/:id/hchart', function(req, res, next) {
    res.json(db.getHData(req.params["id"]));
});

router.get('/projects/:id/gantt', function(req, res, next) {
    res.json(db.getTasks(req.params["id"]));
});

router.get('/*', function(req, res, next) {
    res.status(404)        // HTTP status 404: NotFound
        .send('Not found');
});

module.exports = router;
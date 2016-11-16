"use strict";
var fs = require('fs');

function Database(path) {
    this.data = JSON.parse(fs.readFileSync(path));
}

Database.prototype.getProjects = function () {
    return this.data.projects;
};

Database.prototype.getTasks = function (projectId) {
    return this.data.tasks.filter( x => x.projectId == projectId);
};

Database.prototype.getData = function () {
    return this.data;
};

var path = require('path');
var appDir = path.dirname(__dirname);


module.exports = new Database(appDir + '/data.json');
"use strict";
var fs = require('fs');

function Database(path) {
    this.projects = JSON.parse(fs.readFileSync(path));
}

Database.prototype.getProjects = function () {
    return this.projects;
};

var path = require('path');
var appDir = path.dirname(__dirname);


module.exports = new Database(appDir + '/data.json');
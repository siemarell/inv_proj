"use strict";
var fs = require('fs');

function Database(path) {
    this.projects = JSON.parse(fs.readFileSync(path));
}

Database.prototype.getProjects = function () {
    return this.projects;
};

module.exports = new Database('./data.json');
"use strict";
var fs = require('fs');

function Database(path) {
    this.data = JSON.parse(fs.readFileSync(path));
}

Database.prototype.getProjects = function () {
    return this.data.projects;
};

Database.prototype.getTasks = function (projectId) {
    var data = this.data.projects.filter( x => x.id == projectId);
    if (data) return data[0].tasks;
    return [];
};

Database.prototype.getHData = function (projectId) {
    var data = this.data.projects.filter( x => x.id == projectId);
    if (data) return data[0].hData;
    return [];
};

Database.prototype.getData = function () {
    return this.data;
};

var path = require('path');
var appDir = path.dirname(__dirname);


module.exports = new Database(appDir + '/data.json');
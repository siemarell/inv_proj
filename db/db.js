"use strict";
var fs = require('fs');

function Database(path) {
    this.data = JSON.parse(fs.readFileSync(path));
}

Database.prototype.getProjects = function () {
    return this.data.projects;
};

Database.prototype.getTasks = function (projectId) {
    var data = this.data.projects.filter( project => project.id == projectId);
    if (data) return data[0].tasks;
    return [];
};

Database.prototype.getProjectsByType = function(projectType){
    if (projectType == 'any'){
        return this.data.projects;
    }
    else{
        return this.data.projects.filter(project => project.type == projectType);
    }
};

Database.prototype.getTypes = function () {
    return this.data.projects
        .map(function (item) {
            return item.type;
        })
        .filter((value, index, self)=>self.indexOf(value) === index);
    // var unique = data.filter(function(value, index, self) {
    //     return self.indexOf(value) === index;
    // } );
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
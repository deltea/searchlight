module.exports = function(grunt) {
  // Project configuration.
  // Load JSHint
  grunt.loadNpmTasks("grunt-contrib-jshint");

  // Default build
  grunt.registerTask("default", ["jshint"]);

  // Configuration of tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jshint: {
      all: ["js"],
      options: {
        esversion: 6
      }
    }
  });
};

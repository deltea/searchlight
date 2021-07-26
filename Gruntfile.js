module.exports = function(grunt) {
  // Project configuration.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jshint: {
      all: ["js"]
    }
  });
};

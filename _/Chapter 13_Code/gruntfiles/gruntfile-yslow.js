'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    yslow: {
      pages: {
        files: [{
          src: 'http://www.jquery.com',
        }],
        options: {
          thresholds: {
            weight: 500,
            speed: 5000,
            score: 90,
            requests: 15
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-yslow');
  grunt.registerTask('default', 'yslow');
};
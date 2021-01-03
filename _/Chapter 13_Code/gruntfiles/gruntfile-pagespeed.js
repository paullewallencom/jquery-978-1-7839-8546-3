'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pagespeed: {
      options: {
        nokey: true,
        url: "https://www.packtpub.com"
      },
      prod: {
        options: {
          url: "https://www.packtpub.com/books/content/blogs",
          locale: "en_GB",
          strategy: "desktop",
          threshold: 80
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-pagespeed');
  grunt.registerTask('default', 'pagespeed');
};
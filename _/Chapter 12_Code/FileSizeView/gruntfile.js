module.exports = function(grunt) {

  grunt.initConfig({
    nodewebkit: {
      options: {
        platforms: ['win'],
        buildDir: './builds',
        winIco: './img/filesize.ico'
      },
      src: ['./css/*.css', './img/*.*', './js/*.js', '*.html', '*.php', '*.json', '*.ico']
    }
  })

  grunt.loadNpmTasks('grunt-node-webkit-builder');

  grunt.registerTask('default', ['nodewebkit']);
};
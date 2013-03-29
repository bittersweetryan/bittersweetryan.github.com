module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
      },
      sizzle: {
        files: {
          'js/sizzle.min.js' : ['js/sizzle.js']
        }
      },
      jsonme: {
        files: {
          'js/app.min.js' : ['js/app.js']
        }
      }
    },
    concat : {
      dist: {
        src : ['js/sizzle.min.js', 'js/snack.min.js', 'js/app.min.js'],
        dest : 'js/jsonme.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'concat']);

};
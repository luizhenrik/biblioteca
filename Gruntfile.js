module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'assets/css/min/application.css' : 'assets/stylesheets/application.scss'
        }
      }
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'cssmin']
      },
      js: {
        files: 'assets/javascripts/*.js',
        tasks: ['uglify']
      }
    },

    cssmin: {
       dist: {
          options: {
             banner: '/* Freelas minificado */\n'
          },
          files: {
             'assets/css/min/application.css' : 'assets/css/min/application.css'
          }
      }
    },

    uglify: {
       dist: {
          options: {
             banner: '/* Freelas minificado */\n'
          },
          files: {
             'assets/javascripts/min/scripts.min.js': 'assets/javascripts/*.js'
          }
       }
    }

  });
  //grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default', ['watch']);
}
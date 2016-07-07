module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      target: {
        files: [{
          expand: true,
          cwd: 'lib',
          src: ['**/*'],
          dest: '../../public_html/bbInterview/dist'
        },
        {
          cwd: '.',
          src: ['index.html'],
          dest: '../../public_html/bbInterview/'
        }]
      }
    },
    clean: {
      target: {
        options: {force: true},
        src: ['../../public_html/bbInterview/dist', '../../public_html/bbInterview/index.html']
      }
    },
    jshint: {
      all: {
        options: {asi: true},
        files: {
          src: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
        }
      }
    },
  })

  grunt.task.registerTask('build', ['clean', 'jshint:all', 'copy'])
}

module.exports = function(grunt) {
  var fs = require('fs');

  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-clean')

  var username = process.env.USER || process.env.USERNAME
  var buildDir = ''

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      init: {
        files: [{
          expand: true,
          cwd: 'config',
          src: ['template.config.json'],
          dest: 'config/',
          filter: function(filepath) {
            return !(fs.existsSync('config/' + getUsernameConfigFile()))
          },
          rename: function(dest) {
            return dest + getUsernameConfigFile()
          }
        }]
      },
      build: {
        files: [{
          expand: true,
          cwd: 'lib',
          src: ['**/*'],
          dest: getBuildDir() + '/dist'
        },
        {
          expand: true,
          cwd: 'partials',
          src: ['**/*'],
          dest: getBuildDir() + '/render'
        },
        {
          expand: true,
          cwd: 'resources',
          src: ['**/*'],
          dest: getBuildDir() + '/resources'
        },
        {
          cwd: '.',
          src: ['index.html'],
          dest: getBuildDir() + '/'
        },
        {
          expand: true,
          cwd: 'config',
          src: [getUsernameConfigFile()],
          dest: getBuildDir() + '/dist/config/',
          rename: function(dest) {
            return dest + 'config.json'
          }
        }]
      }
    },
    clean: {
      target: {
        options: {force: true},
        src: [getBuildDir() + '/dist', getBuildDir() + '/index.html']
      }
    },
    jshint: {
      all: {
        options: {asi: true},
        files: {
          src: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js', 'server.js']
        }
      }
    },
  })

  grunt.task.registerTask('check_config', function() {
    if (!fs.existsSync('config/' + getUsernameConfigFile())) {
      console.log('Run "grunt init" first to generate a config file for your username. Then update the newly created config before continuing.')
      return false
    }
    return true
  })

  grunt.task.registerTask('init', ['copy:init'])
  grunt.task.registerTask('build', ['check_config', 'clean', 'jshint:all', 'copy:build'])

  function getUsernameConfigFile() {
    return username + '.config.json'
  }

  function getBuildDir() {
    if (buildDir === '') {
      buildDir = grunt.file.readJSON('config/' + getUsernameConfigFile()).build_dir
    }

    return buildDir
  }
}

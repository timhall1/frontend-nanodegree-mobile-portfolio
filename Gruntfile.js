module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Uglify all js files and place uglified versions in dist directory
    uglify: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'src',
          src: '**/*.js',
          dest: 'dist'
        }]
      }
    },
    // Minify all HTML files and place minified versions in dist directory
    htmlmin: {
      src: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'src/index.html', // 'destination': 'source'
          'dist/project-2048.html': 'src/project-2048.html',
          'dist/project-mobile.html': 'src/project-mobile.html',
          'dist/project-webperf.html': 'src/project-webperf.html',
          'dist/views/pizza.html': 'src/views/pizza.html'
        }  
      }
    },
    // Inline all CSS into HTML files in dist directory
    inline: {
      dist: {
        src: 'src/index.html',
        dest: 'dist/index.html'
      }
    },
    // Minify all contents of a release directory and add a .min.css extension
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.css'
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-inline');


  // Default task(s).
  grunt.registerTask('default', ['cssmin']);
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['htmlmin']);
  grunt.registerTask('default', ['inline']);
  

};
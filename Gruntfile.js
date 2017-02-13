module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Inline all CSS into HTML files in dist directory
    inline: {
      dist: {
        src: 'src/index.html',
        dest: 'dist/index.html'
      }
    },
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
    },
    // Minify all HTML files and place minified versions in dist directory
    htmlmin: {
      src: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'src/index.html': 'dist/index.html', // 'destination': 'source'
          'dist/project-2048.html': 'src/project-2048.html',
          'dist/project-mobile.html': 'src/project-mobile.html',
          'dist/project-webperf.html': 'src/project-webperf.html',
          'dist/views/pizza.html': 'src/views/pizza.html'
        }  
      }
    },
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-inline');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  


  // Run the tasks.
  grunt.registerTask('default', ['cssmin']);
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['inline']);
  grunt.registerTask('default', ['htmlmin']);
  
};
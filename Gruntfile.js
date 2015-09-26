module.exports = function(grunt) {
  grunt.initConfig({
    serve: {
      options: {
        port: 9002,
        silently: true
      }
    },
    open: {
      build: {
        path: 'http://localhost:9002/index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-serve');

  grunt.registerTask('default', ['open', 'serve']);

};

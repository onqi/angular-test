module.exports = function(grunt) {

  grunt.initConfig({
    concurrent: {
      dev: ["nodemon", "watch"],
      options: {
        logConcurrentOutput: true
      }
    },
    nodemon: {
      dev: {
        script: 'bin/www',
        options: {
          /** Environment variables required by the NODE application **/
          env: {
            "NODE_ENV": "development"
            , "NODE_CONFIG": "dev"
          },
          watch: ["server"],
          delay: 300,

          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });

            /** Update .rebooted to fire Live-Reload **/
            nodemon.on('restart', function () {
              // Delay before server listens on port
              setTimeout(function() {
                require('fs').writeFileSync('.rebooted', 'rebooted');
              }, 1000);
            });
          }
        }
      }
    },
    watch: {
      all :{
        options: { nospawn: true, livereload: true },
        files: ['public/**/*.html', 'public/**/*.css', 'public/**/*.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-nodemon");
  grunt.loadNpmTasks("grunt-concurrent")
  grunt.registerTask("default", ["concurrent:dev"]);

};

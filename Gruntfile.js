module.exports = function(grunt) {

  // 1. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '\/** \n  LESS-SPACE \n \n  less-space is a responsive css positioning classses independent of Bootstrap built with Less \n  github url: http:\/\/https://github.com/Eomerx/less-space \n  Author: \n    Ömer Aslanbakan \n    http:\/\/twitter.com\/Eomerx \n    http:\/\/aslanbakan.com \n    omer@aslanbakan.com \n *\/',




    ////////////
    // watch //
    ////////////
    /*
      npm install grunt-contrib-watch
      grunt.loadNpmTasks('grunt-contrib-watch');
    */
    watch: {
      stylecss: {
        files: ['src/less-space.less'],
        tasks: ['default'],
        options: {
          spawn: true,
          // livereload: 35729
        }
      }
    },





    ///////////
    // less //
    ///////////
    /*
      npm install grunt-contrib-less
      grunt.loadNpmTasks('grunt-contrib-less');
    */
    less: {
      css: {
        options: {
          paths: ["less"],
          compress: false,
          cleancss: false,
          optimization: false,
        },
        files: {
          "dist/less-space.css": "src/less-space.less"
        }
      },
      cssmin: {
        options: {
          paths: ["less"],
          compress: true,
          cleancss: false,
          optimization: false,
        },
        files: {
          "dist/less-space.min.css": "src/less-space.less"
        }
      },
    },


    ////////////
    // banner //
    ////////////
    /*
      npm install grunt-banner --save-dev
      grunt.loadNpmTasks('grunt-banner');
    */
    usebanner: {
      st: {
        options: {
          position: 'top',
          banner: '<%= banner %>'
        },
        files: {
          src: ['dist/less-space.css', 'dist/less-space.min.css', ]
        }
      }
    }


  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['less', 'usebanner']);
};

module.exports = function(grunt) {

  // 1. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '\/** \n  LESS-SPACE \n \n  less-space is a responsive css positioning classses independent of Bootstrap built with LESS and SASS \n  github url: http:\/\/https://github.com/Eomerx/less-space \n  Author: \n    Ömer Aslanbakan \n    http:\/\/twitter.com\/Eomerx \n    http:\/\/aslanbakan.com \n    omer@aslanbakan.com \n *\/',




    ////////////
    // watch //
    ////////////
    /*
      npm install grunt-contrib-watch
      grunt.loadNpmTasks('grunt-contrib-watch');
    */
    watch: {
      less: {
        files: ['src/less-space.less'],
        tasks: ['less'],
        options: {
          spawn: true,
          // livereload: 35729
        }
      },
      sass: {
        files: ['src/less-space.scss'],
        tasks: ['sass'],
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



    ////////////////
    // grunt scss //
    ////////////////
    /*
    npm install grunt-contrib-sass --save-dev
    grunt.loadNpmTasks('grunt-contrib-sass');
     */
    sass: {
      css: {
        options: {
          sourcemap: "none",
          precision: 5,
          check: false,
          lineNumbers: false,
          update: false,
          compass: false,
          style: 'compact' // nested, compact, compressed, expanded.
        },
        files: {
          'dist/sass-space.css': 'src/sass-space.scss'
        }
      },
      cssmin: {
        options: {
          sourcemap: "none",
          precision: 5,
          check: false,
          lineNumbers: false,
          update: true,
          compass: false,
          style: 'compressed' // nested, compact, compressed, expanded.
        },
        files: {
          'dist/sass-space.min.css': 'src/sass-space.scss'
        }
      }
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
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['less', 'sass', 'usebanner']);
};

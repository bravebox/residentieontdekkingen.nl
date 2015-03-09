module.exports = function (grunt) {
	grunt.initConfig({

    // remove some directories
		clean: {
			tasks: ["assets/css", "assets/js"]
		},

    browserify: {
      //standalone browserify watch - do NOT use with grunt-watch
      client: {
        src: ['src/**/*.js'],
        dest: 'assets/js/app.js',
        options: {
          external: ['jQuery', 'momentWrapper'],
          watch: true,
          keepAlive: true
        }
      },
      //working with grunt-watch - do NOT use with keepAlive above
      watchClient: {
				src: ['src/**/*.js'],
        dest: 'assets/js/app.js',
        options: {
          external: ['jQuery', 'momentWrapper'],
          watch: true
        }
      }
    },

		uglify: {
			options: {
				mangle: true,
				compress: true,
				sourceMap: "assets/js/app.min.map"
			},
			target: {
				src: "assets/js/app.js",
				dest: "assets/js/app.min.js"
			}
		},

		// CSS
		compass: {
			sassDir: '_sass/',
			cssDir: 'assets/css/',
			banner: "/*! Mick Schouten (bravebox.nl) 2015 */\n"
		},

		// jekyll only builds and doesnt watch
    watch: {
			uglify: {
        files: ['assets/js/*.js'],
        tasks: ['uglify']
      },
      compass: {
        files: ['_sass/*.scss'],
        tasks: ['compass']
      }
    }
	});

  grunt.loadNpmTasks('grunt-contrib-clean');				// clean directories
  grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');				// minify js
	grunt.loadNpmTasks('grunt-contrib-compass');			// preprocess to css
	grunt.loadNpmTasks('grunt-contrib-watch');				// watch

	// grunt build
  grunt.registerTask('default', ['browserify:vendor', 'browserify:client', 'uglify', 'compass']);
  grunt.registerTask('browserifyWithWatch', [
    //'browserify:vendor',
    'browserify:watchClient',
		'watch:uglify',
    'watch:compass'
  ]);
};

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		stylus: {
			dev: {
				options: {
					compress: true,
					optimization: 2,
					sourceMap: true,
					sourceMapFilename: 'assets/styles/styles.css.map',
					sourceMapBasepath: 'assets/styles/'
				},
				files: {
					'assets/styles/styles.css': 'assets/styles/styles.styl',
				}
			}
		},

		postcss: {
      options: {
      	map: true,
        processors: [
          require('autoprefixer')({ browers: 'last 2 versions' }),
        ]
      },
      main: {
        src: [
        	'assets/styles/styles.css',
        ]
      }
    },

    browserSync: {
			dev: {
				bsFiles: {
					src : [
						'assets/styles/*.css',
						'*.html',
						'*.js'
					]
				},
				options: {
					watchTask: true,
					server: {
						baseDir: "./"
					}
				}
			}
		},

		watch: {
			dev: {
				files: ['assets/styles/*.styl'],
				tasks: ['stylus:dev', 'postcss:main'],
				options: {
					spawn: false,
				}
			}
		}

	})

	grunt.loadNpmTasks('grunt-postcss')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-contrib-stylus')
	grunt.loadNpmTasks('grunt-browser-sync')

	grunt.registerTask('default', ['browserSync', 'stylus:dev', 'postcss:main', 'watch:dev'])
}

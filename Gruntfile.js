'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		// ------- Page Speed Config ------- //
		pagespeed: {
			options: {
				nokey: true,
				url: "https://leogovan.github.io/udacity-optimisation/"
			},
			prod: {
				options: {
					url: "https://leogovan.github.io/udacity-optimisation/",
					locale: "en_GB",
					strategy: "desktop",
					threshold: 90
				}
			},
			paths: {
				options: {
					paths: ["https://leogovan.github.io/udacity-optimisation/"], // can be a list of array elements
					locale: "en_GB",
					strategy: "mobile",
					threshold: 90
				}
			}
		},

		// ------- CSS Minify Config ------- //

		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css',
					src: ['*.css', '!*.min.css'],
					dest: 'css',
					ext: '.min.css'
				}]
			}
		}

	}); // end of initConfig


	// --------- Load Tasks ---------- //

	// Page Speed Insights
	grunt.loadNpmTasks('grunt-pagespeed');
	
	// CSS minify
	grunt.loadNpmTasks('grunt-contrib-cssmin');


	// --------- Register/Run Tasks ---------- //

	// 'grunt speed' in cmd line to run
	grunt.registerTask('speed', ['pagespeed']);

	// css grunt tasks
	grunt.registerTask('default', ['cssmin']);

}; // end of module.exports



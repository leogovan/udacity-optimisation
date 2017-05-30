'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		pagespeed: {
			options: {
				nokey: true,
				url: "https://developers.google.com"
			},
			prod: {
				options: {
					url: "https://developers.google.com/speed/docs/insights/v1/getting_started",
					locale: "en_GB",
					strategy: "desktop",
					threshold: 80
				}
			},
			paths: {
				options: {
					paths: ["/speed/docs/insights/v1/getting_started", "/speed/docs/about"],
					locale: "en_GB",
					strategy: "desktop",
					threshold: 80
				}
			}
		}
	}); // end of initConfig
}; // end of module.exports


// Page Speed Insights
grunt.loadNpmTasks('grunt-pagespeed');


// 'grunt speed' in cmd line to run
grunt.registerTask('speed', ['pagespeed']);
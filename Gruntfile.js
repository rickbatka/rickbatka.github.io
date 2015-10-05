module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'Sass',
          src: ['*.scss'],
          dest: 'Css',
          ext: '.css'
        }]
      }
		},
		watch: {
			css: {
				files: 'Sass/*.scss',
				tasks: ['sass']
			}
		},
		'http-server': {
        'dev': {
            port: 8080,
						host: '0.0.0.0',
            showDir : true,
            autoIndex: true,
            // server default file extension
            ext: "html",
            // run in parallel with other tasks
            runInBackground: true
        }
    }
	});
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-http-server');
	grunt.registerTask('default',[
		'http-server',
		'watch'
	]);
}

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
		}
	});
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}

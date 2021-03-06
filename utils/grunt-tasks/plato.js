module.exports = function(grunt) {
    grunt.config('plato', {
        report: {
            options: {
                jshint: grunt.file.readJSON('.jshintrc')
            },
            files: {
                'reports': ['<%= jshint.client %>']
            }
        }
    });

    grunt.loadNpmTasks('grunt-plato');
};
module.exports = function(grunt) {
    grunt.config('watch', {
        clientJS: {
            files: [
                '!www/js/modules/**/templates/**',
                'www/js/**/*.js',
                'www/js/*.js'
            ],
            tasks: ['jshint', 'revision:js']
        },
        otherJS: {
            files: ['Gruntfile.js'],
            tasks: ['jshint']
        },
        less: {
            files: ['www/less/**/*.less'],
            tasks: [
                'concat:less',
                'recess:app',
                'less:dev',
                'revision:css',
                'clean:tmp'
            ]
        },
        css: {
            files: ['www/css/style.css']
        },
        dust: {
            files: ['www/dust/**/*.dust'],
            tasks: ['dustpile', 'revision:js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
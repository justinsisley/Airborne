module.exports = function(grunt) {
    grunt.config('requirejs', {
        compile: {
            options: {
                baseUrl: 'www/js',
                name: 'main',
                mainConfigFile: 'www/js/config.js',
                include: ['requireLib'],
                insertRequire: [
                    'main'
                ],
                out: 'www/app.js',
                preserveLicenseComments: false
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-requirejs');
};
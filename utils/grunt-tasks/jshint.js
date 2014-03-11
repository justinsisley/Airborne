module.exports = function(grunt) {
    grunt.config('jshint', {
        options: {
            jshintrc: '.jshintrc'
        },
        client: [
            'Gruntfile.js',
            'www/js/helpers/*.js',
            'www/js/modules/**/collections/*.js',
            'www/js/modules/**/controllers/*.js',
            'www/js/modules/**/models/*.js',
            'www/js/modules/**/routers/*.js',
            'www/js/modules/**/views/*.js',
            'www/js/widgets/*.js',
            'www/js/*.js',
            'server/**/*.js',
            'server/*.js'
        ]
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
};
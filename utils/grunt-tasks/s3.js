module.exports = function(grunt) {
    var packageJSON = require('../../package.json');
    
    grunt.config('s3', {
        options: {
            key: '',
            secret: '',
            bucket: '',
            access: 'public-read',
            gzip: true,
            headers: {
                // 3 years
                'Cache-Control': 'max-age=87091200000'
            }
        },
        qa: {
            upload: [
                {
                    src: 'tmp/app.js',
                    dest: 'js/app.' + packageJSON.javascriptVersion + '.js',
                    gzip: true
                },
                {
                    src: 'www/css/style.css',
                    dest: 'css/style.' + packageJSON.cssVersion + '.css',
                    gzip: true
                },
                {
                    src: 'www/css/fonts.css',
                    dest: 'css/fonts.' + packageJSON.fontVersion + '.css',
                    gzip: true
                },
                {
                    src: 'www/css/fonts-' + packageJSON.fontVersion + '/*',
                    dest: 'css/fonts-' + packageJSON.fontVersion + '/',
                    gzip: true
                }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-s3');
};
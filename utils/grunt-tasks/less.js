module.exports = function(grunt) {
    grunt.config('less', {
        dev: {
            src: [
                'www/vendor/ratchet/dist/css/ratchet.css',
                'www/vendor/ratchet/dist/css/ratchet-theme-ios.css',
                'tmp/dist.less'
            ],
            dest: 'www/css/style.css'
        },
        prd: {
            options: {
                cleancss: true
            },
            src: [
                'www/vendor/ratchet/dist/css/ratchet.css',
                'www/vendor/ratchet/dist/css/ratchet-theme-ios.css',
                'tmp/dist.less'
            ],
            dest: 'www/css/style.css'
        }
    });

    grunt.config('concat', {
        less: {
            src: [
                // Reset disabled. Using Ratchet.
                'www/less/**/!(reset).less'
            ],
            dest: 'tmp/dist.less'
        }
    });

    grunt.config('recess', {
        app: {
            src: ['tmp/dist.less']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-recess');
};
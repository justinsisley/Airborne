module.exports = function(grunt) {
    grunt.config('shell', {
        test: {
            command: 'mocha-phantomjs -R spec http://localhost:9001/test/testrunner.html',
            options: {
                stdout: true,
                stderr: true
            }
        },
        ios: {
            command: 'phonegap run ios',
            options: {
                stdout: true,
                stderr: true
            }
        },
        ripple: {
            command: 'ripple emulate -port 8743',
            options: {
                stdout: true,
                stderr: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
};
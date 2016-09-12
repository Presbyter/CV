module.exports = function (grunt) {
    grunt.initConfig({
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        '*.html',
                        'css/*.css',
                        'js/*.js'
                    ]
                },
                options: {
                    server: {
                        baseDir: './'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync']);
}
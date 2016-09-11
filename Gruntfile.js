module.exports = function (grunt) {
    grunt.initConfig({
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        '*.html',
                        'css/*.css'
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
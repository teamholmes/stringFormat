module.exports = function(grunt) {
grunt.initConfig({
    mochacli: {
        options: {
            require: ['assert'],
            reporter: 'nyan',
            bail: true
        },
        all: ['test/*.js']
    }
});

 grunt.loadNpmTasks('grunt-mocha-cli');
 
grunt.registerTask('test', ['mochacli']);
};
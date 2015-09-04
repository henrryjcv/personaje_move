module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jade: {
            debug: {
                options: {
                    pretty: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'source',
                        dest: 'source',
                        src: '*.jade',
                        ext: '.html'
                    }
                ]
            },
            release: {
                files: [
                    {
                        expand: true,
                        cwd: 'source',
                        dest: 'dist',
                        src: '*.jade',
                        ext: '.html'
                    }
                ]
            }
        },
        sass: {
            debug: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'source/css/style.css': 'source/sass/style.scss'
                }
            },
            release: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/css/style.css': 'source/sass/style.scss'
                }
            }
        },
        coffee: {
            debug: {
                options: {
                  join: true
                },
                files: [{
                    expand: true,
                    flatten: true,
                    cwd: 'source/coffeescript',
                    src: ['*.coffee'],
                    dest: 'source/js/',
                    ext: '.js'
                }]
            },
            release: {
                options: {
                  join: true
                },
                files: {
                    'dist/js/init.js': 'source/coffeescript/init.coffee'
                }
            }
        },
        'string-replace': {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'source/',
                    src: '**/*',
                    dest: 'liferay-dist/'
                }],
                options: {
                    replacements: [
                        {
                            pattern: '../images/bgForm.png',
                            replacement: '/documents/80379/2624215/bgForm.png/f29a29e4-a409-4be2-9517-a855bbe84558?t=1439223431526'
                        },
                        {
                            pattern: 'images/logoMovistar.png',
                            replacement: '/documents/80379/2624215/logoMovistar.png/dce4a345-94eb-4342-aa3c-7f14c48ed2b6?t=1439223431284'
                        },
                        {
                            pattern: 'images/icoSms.png',
                            replacement: '/documents/80379/2624215/icoSms.png/4991b0f2-416f-4b53-a735-245cf3dc6c11?t=1439223431007'
                        },
                        {
                            pattern: 'images/icoRpm.png',
                            replacement: '/documents/80379/2624215/icoRpm.png/141b8bd8-67ae-41c8-bec7-f566909dacb1?t=1439223430767'
                        },
                        {
                            pattern: 'images/icoMinIli.png',
                            replacement: '/documents/80379/2624215/icoMinIli.png/3270b73b-12e8-4cec-817e-e98f803ff45b?t=1439223430529'
                        },
                        {
                            pattern: 'images/icoMb.png',
                            replacement: '/documents/80379/2624215/icoMb.png/ca9a3cb8-96cb-4803-8911-a24ded9e2917?t=1439223430335'
                        },
                        {
                            pattern: '../images/icoFle.png',
                            replacement: '/documents/80379/2624215/icoFle.png/586dd164-cd15-4092-b191-9857f3fd5cc1?t=1439223430039'
                        },
                        {
                            pattern: 'images/icoComprar.png',
                            replacement: '/documents/80379/2624215/icoComprar.png/1de845c9-e949-4872-8772-04f34350e081?t=1439223428219'
                        },
                        {
                            pattern: 'images/icoComprar.png',
                            replacement: '/documents/80379/2624215/icoComprar.png/1de845c9-e949-4872-8772-04f34350e081?t=1439223428219'
                        },
                        {
                            pattern: 'images/equipoIphone.png',
                            replacement: '/documents/80379/2624192/equipoIphone.png/d2582946-19c6-4723-a664-2b000c89cab7?t=1439223603772'
                        },
                        {
                            pattern: 'images/pegatinaIphone.png',
                            replacement: '/documents/80379/2624192/pegatinaIphone.png/f373f929-546b-4cbe-92b4-86fc5615be7c?t=1439312662855'
                        },
                        {
                            pattern: 'images/equipoMotorola.png',
                            replacement: '/documents/80379/2624196/equipoMotorola.png/c54aaaf9-aa54-40e5-accb-8c62a01f513b?t=1439485452650'
                        },
                        {
                            pattern: 'images/pegatinaMotorola.png',
                            replacement: '/documents/80379/2624196/pegatinaMotorola.png/ceb2d980-aa65-4623-99dd-2282c37d68c4?t=1439485452225'
                        },
                        {
                            pattern: 'images/equipoSamsung.png',
                            replacement: '/documents/80379/2624198/equipoSamsung.png/4e4b25a4-170f-4e30-bc04-d2be36266ecc?t=1439485590342'
                        },
                        {
                            pattern: 'images/pegatinaSamsung.png',
                            replacement: '/documents/80379/2624198/pegatinaSamsung.png/dcbc0fab-d401-45ba-a3df-2ead8c3256c4?t=1439485590021'
                        },
                        {
                            pattern: 'font/movistarheadline/movistarheadline-webfont.eot',
                            replacement: '/documents/80379/2627934/movistarheadline-webfont.eot/dbc7904b-6d65-4ca7-832e-6684b6afb1c9'
                        },
                        {
                            pattern: 'font/movistarheadline/movistarheadline-webfont.eot?#iefix',
                            replacement: '/documents/80379/2627934/movistarheadline-webfont.eot?#iefix/dbc7904b-6d65-4ca7-832e-6684b6afb1c9'
                        },
                        {
                            pattern: 'font/movistarheadline/movistarheadline-webfont.ttf',
                            replacement: '/documents/80379/2627934/movistarheadline-webfont.ttf/e1839680-4fed-44ca-af1a-36f490fac611'
                        },
                        {
                            pattern: 'font/movistarheadline/movistarheadline-webfont.svg',
                            replacement: '/documents/80379/2627934/movistarheadline-webfont.svg/2de33e3c-7428-4efe-92ce-214e7ac5da61'
                        },
                        {
                            pattern: 'font/movistarheadlinebold/movistarheadlinebold-webfont.eot',
                            replacement: '/documents/80379/2627934/movistarheadlinebold-webfont.eot/32009711-a71b-4668-b6ab-e4fe6db60948'
                        },
                        {
                            pattern: 'font/movistarheadlinebold/movistarheadlinebold-webfont.eot?#iefix',
                            replacement: '/documents/80379/2627934/movistarheadlinebold-webfont.eot?#iefix/32009711-a71b-4668-b6ab-e4fe6db60948'
                        },
                        {
                            pattern: 'font/movistarheadlinebold/movistarheadlinebold-webfont.ttf',
                            replacement: '/documents/80379/2627934/movistarheadlinebold-webfont.ttf/f50bffd8-639b-44f7-a735-daf47f95078e'
                        },
                        {
                            pattern: 'font/movistarheadlinebold/movistarheadlinebold-webfont.svg',
                            replacement: '/documents/80379/2627934/movistarheadlinebold-webfont.svg/9285b6ba-152a-4630-aaa9-35b8a83dbd55'
                        },
                        {
                            pattern: 'font/movistartext/movistartext-webfont.eot',
                            replacement: '/documents/80379/2627934/movistartext-webfont.eot/0b891a0f-2d97-4634-a1e3-5f5c56187a8d'
                        },
                        {
                            pattern: 'font/movistartext/movistartext-webfont.eot?#iefix',
                            replacement: '/documents/80379/2627934/movistartext-webfont.eot?#iefix/0b891a0f-2d97-4634-a1e3-5f5c56187a8d'
                        },
                        {
                            pattern: 'font/movistartext/movistartext-webfont.ttf',
                            replacement: '/documents/80379/2627934/movistartext-webfont.ttf/d39ed5e5-c45e-4af9-aa49-0389a9a85a02'
                        },
                        {
                            pattern: 'font/movistartext/movistartext-webfont.svg',
                            replacement: '/documents/80379/2627934/movistartext-webfont.svg/34ec0682-335a-44d4-b9d3-d4b8cc5c6473'
                        },
                        {
                            pattern: 'font/movistartextbold/movistartextbold-webfont.eot',
                            replacement: '/documents/80379/2627934/movistartextbold-webfont.eot/1335c441-50a9-459a-949b-596d7998c249'
                        },
                        {
                            pattern: 'font/movistartextbold/movistartextbold-webfont.eot?#iefix',
                            replacement: '/documents/80379/2627934/movistartextbold-webfont.eot?#iefix/1335c441-50a9-459a-949b-596d7998c249'
                        },
                        {
                            pattern: 'font/movistartextbold/movistartextbold-webfont.ttf',
                            replacement: '/documents/80379/2627934/movistartextbold-webfont.ttf/85edb187-41ba-4c57-8c0d-c0c4ec588dd1'
                        },
                        {
                            pattern: 'font/movistartextbold/movistartextbold-webfont.svg',
                            replacement: '/documents/80379/2627934/movistartextbold-webfont.svg/a2ad9340-7f3c-4de0-8b91-af813fbbcf9a'
                        }

                    ]
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 4000,
                    base: './source',
                    hostname: '*'
                }
            }
        },
        watch: {
            jadewatch: {
                files: ['source/*.jade', 'source/layout/*.jade'],
                tasks: ['jade:debug']
            },
            sasswatch: {
                files: ['source/sass/*.scss'],
                tasks: ['sass:debug'],
                options: {
                    livereload: true
                }
            },
            coffeewatch: {
                files: ['source/coffeescript/*.coffee'],
                tasks: ['coffee:debug']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-coffeelint');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Definicion de tareas
    grunt.registerTask('default', ['connect','watch']);
    grunt.registerTask('produccion', ['jade:release', 'sass:release', 'coffee:release']);
    grunt.registerTask('life', ['jade','string-replace']);

};